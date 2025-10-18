import { motion } from "framer-motion";

export const FullScreenContact = () => {
  return (
    <section 
      id="contact" 
      className="h-screen flex items-center justify-center px-6 snap-start snap-always bg-foreground text-background relative z-30"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="text-3xl md:text-4xl font-light tracking-tight">
              Clarity isn't an accident.
            </p>
            <p className="text-2xl md:text-3xl text-background/60 font-light">
              Let's make it deliberate.
            </p>
          </div>

          <p className="text-lg text-background/70 max-w-xl mx-auto leading-relaxed">
            Looking for a designer who maps systems, closes loops, and delivers measurable outcomes? Let's talk.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="pt-6"
          >
            <a
              href="mailto:nunorgsantosdesigner@gmail.com"
              className="inline-block border border-background/30 text-background px-8 py-3 rounded-full text-base font-medium transition-all duration-200 hover:border-background hover:translate-x-[2px] hover:bg-background/5"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};