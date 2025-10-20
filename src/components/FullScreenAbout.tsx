import { motion } from "framer-motion";
import profilePicture from "@/assets/profilepicture.jpeg";

export const FullScreenAbout = () => {
  return (
    <section 
      id="about" 
      className="h-screen flex items-center justify-center px-6 snap-start snap-always relative z-20"
      style={{ backgroundColor: '#0e0e0e' }}
    >
      {/* Faint grid texture */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left: Portrait/workspace */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="flex-1 lg:flex-[0.5]"
          >
            <div className="w-64 h-80 sm:w-80 sm:h-96 rounded-xl overflow-hidden border border-white/10 mx-auto">
              <img
                src={profilePicture}
                alt="Nuno Santos"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="flex-1 lg:flex-[0.5] space-y-6 text-[#eaeaea] text-center lg:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight leading-relaxed mb-6 lg:mb-8">
              About
            </h2>
            
            <div className="space-y-5 text-sm sm:text-base leading-relaxed text-[#eaeaea]/80">
              <p>
                I design systems that translate complexity into confidence. Whether it's enterprise workflows, 
                research platforms, or consumer apps, I focus on clarity over decoration.
              </p>
              <p>
                My approach starts with mapping constraints and user needs, then shipping thin slices early. 
                I measure before and after, so outcomes aren't guesswork—they're evidence.
              </p>
              <p>
                When I'm not designing, I'm exploring accessibility standards, tinkering with design tokens, 
                or diving into narrative-driven games that remind me why experience design matters.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};