import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Lock } from "lucide-react";

// Import mockup images
import oartMockup from '@/assets/oart-mockup.jpg';
import safewalkMockup from '@/assets/SafewalkBannerImage.png';
import umaiMockup from '@/assets/UmaiBannerImage.png';

interface WorkItem {
  id: string;
  title: string;
  year: string;
  role: string;
  image: string;
  route?: string;
  locked?: boolean;
}

const works: WorkItem[] = [
  {
    id: 'oart',
    title: 'Scalable UX for Enterprise Workflows',
    year: '2024',
    role: 'Product Design',
    image: oartMockup,
    route: '/work/enterprise/otgate',
    locked: true,
  },
  {
    id: 'safewalk',
    title: 'SafeWalk',
    year: '2023',
    role: 'UX/UI Design',
    image: safewalkMockup,
    route: '/work/safewalk',
  },
  {
    id: 'umai',
    title: 'Umai',
    year: '2023',
    role: 'Product Design',
    image: umaiMockup,
    route: '/work/umai',
  },
];

export const ClarityWork = () => {
  const navigate = useNavigate();

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mb-16"
        >
          <p className="label-mono mb-2">Selected Work</p>
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight">
            Three immersive systems
          </h2>
        </motion.div>

        {/* Work panels */}
        <div className="space-y-6">
          {works.map((work, index) => (
            <WorkPanel 
              key={work.id} 
              work={work} 
              index={index}
              onClick={() => work.route && navigate(work.route)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface WorkPanelProps {
  work: WorkItem;
  index: number;
  onClick: () => void;
}

const WorkPanel = ({ work, index, onClick }: WorkPanelProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group relative w-full aspect-[16/9] overflow-hidden rounded-lg cursor-pointer"
      onClick={onClick}
    >
      {/* Image with subtle parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <img
          src={work.image}
          alt={work.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
        />
      </motion.div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Content overlay */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="label-mono text-white/70">{work.year}</span>
            <span className="w-1 h-1 rounded-full bg-white/50" />
            <span className="label-mono text-white/70">{work.role}</span>
            {work.locked && (
              <>
                <span className="w-1 h-1 rounded-full bg-white/50" />
                <Lock className="w-3 h-3 text-white/70" />
              </>
            )}
          </div>
          <h3 className="text-2xl md:text-3xl font-normal text-white tracking-tight transition-colors duration-200 group-hover:text-primary-glow">
            {work.title}
          </h3>
        </motion.div>

        {/* Micro-scroll hint pulse */}
        <motion.div
          className="absolute bottom-4 right-4 w-1 h-8 bg-white/30 rounded-full"
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scaleY: [1, 1.2, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
};
