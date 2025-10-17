import { motion } from "framer-motion";
import profilePicture from "@/assets/profilepicture.jpeg";

export const SimpleAbout = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-8">
          {/* Small grayscale photo - left aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="flex-shrink-0"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img
                src={profilePicture}
                alt="Nuno Santos"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* One short line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="text-xl md:text-2xl font-normal text-foreground leading-relaxed"
          >
            I build flows that close loops and systems that earn trust.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
