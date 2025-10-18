import { motion } from "framer-motion";

export const SimpleContact = () => {
  return (
    <section 
      id="contact" 
      className="py-24 px-6 bg-foreground text-background"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-6"
        >
          {/* Two lines */}
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl font-normal tracking-tight">
              Clarity isn't an accident.
            </p>
            <p className="text-xl md:text-2xl text-background/70 font-light">
              Let's make it deliberate.
            </p>
          </div>

          {/* Small outlined button */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="pt-4"
          >
            <a
              href="mailto:nunorgsantosdesigner@gmail.com"
              className="inline-block border border-background/40 text-background px-5 py-2 rounded-full text-sm font-medium transition-all duration-150 hover:border-background hover:translate-x-[1px]"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
