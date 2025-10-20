import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";

import oartMockup from '@/assets/oart-mockup.jpg';
import safewalkMockup from '@/assets/SafewalkBannerImage.png';
import umaiMockup from '@/assets/UmaiBannerImage.png';

interface WorkItem {
  id: string;
  title: string;
  description: string;
  image: string;
  route?: string;
  locked?: boolean;
}

const works: WorkItem[] = [
  {
    id: 'oart',
    title: 'Enterprise Workflows',
    description: '75% faster approvals',
    image: oartMockup,
    route: '/work/enterprise/otgate',
    locked: true,
  },
  {
    id: 'safewalk',
    title: 'SafeWalk',
    description: 'Safety-first navigation',
    image: safewalkMockup,
    route: '/work/safewalk',
  },
  {
    id: 'umai',
    title: 'Umai',
    description: '30% shorter order time',
    image: umaiMockup,
    route: '/work/umai',
  },
];

export const FullScreenWork = () => {
  const navigate = useNavigate();

  return (
    <section 
      id="work" 
      className="h-screen flex items-center justify-center px-6 snap-start snap-always bg-background relative z-10"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Selected Work
          </h2>
          <p className="text-muted-foreground text-lg">
            Case studies in clarity and impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="card-simple cursor-pointer group"
              onClick={() => work.route && navigate(work.route)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                />
                <motion.div
                  className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10"
                />
                {work.locked && (
                  <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm rounded-full p-2">
                    <Lock className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-medium mb-2 transition-colors duration-200 group-hover:text-primary">
                  {work.title}
                </h3>
                <p className="text-muted-foreground">
                  {work.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};