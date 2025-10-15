import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

export const ClarityContact = () => {
  return (
    <section 
      id="contact" 
      className="py-32 px-6 bg-foreground text-background relative overflow-hidden"
    >
      {/* Subtle dark mesh */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--background))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--background))_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-8"
        >
          {/* Headline */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-normal tracking-tight">
              Clarity isn't an accident.
            </h2>
            <p className="text-2xl md:text-3xl text-background/70 font-light">
              Let's make it deliberate.
            </p>
          </div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="pt-6"
          >
            <a
              href="mailto:nunorgsantosdesigner@gmail.com"
              className="inline-block bg-background text-foreground px-8 py-4 rounded-md font-medium transition-all duration-150 hover:bg-background/90 hover:scale-[1.02] hover:shadow-float"
              style={{
                boxShadow: "var(--shadow-micro)"
              }}
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="flex justify-center gap-8 pt-8"
          >
            <a
              href="mailto:nunorgsantosdesigner@gmail.com"
              className="flex flex-col items-center gap-2 text-background/70 hover:text-background transition-colors duration-200 group"
            >
              <Mail className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
              <span className="text-sm">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nunorgsantos/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-background/70 hover:text-background transition-colors duration-200 group"
            >
              <Linkedin className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
