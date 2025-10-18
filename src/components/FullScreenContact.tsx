import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const FullScreenContact = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="contact" 
      className="h-screen flex items-center justify-center px-6 snap-start snap-always relative z-30"
      style={{ backgroundColor: '#121212' }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-8"
        >
          <div className="space-y-4 text-[#eaeaea]">
            <p className="text-3xl md:text-4xl font-light tracking-tight inline-flex items-center justify-center gap-2">
              Let's talk design systems, workflows, or tools
              <span className={`inline-block w-[2px] h-8 bg-[#a6c48a] transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="pt-6"
          >
            <a
              href="mailto:nunorgsantosdesigner@gmail.com"
              className="inline-block border border-[#a6c48a]/30 text-[#eaeaea] px-8 py-3 rounded-full text-base font-medium transition-all duration-200 hover:border-[#bcc9a4] hover:translate-x-[2px] hover:bg-[#a6c48a]/10"
            >
              nunorgsantosdesigner@gmail.com
            </a>
          </motion.div>

          <div className="pt-12 text-[#eaeaea]/40 text-sm">
            © 2025 Nuno Santos
          </div>
        </motion.div>
      </div>
    </section>
  );
};