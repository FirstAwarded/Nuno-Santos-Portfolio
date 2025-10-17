import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";

// Import mockup images
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

export const SimpleWork = () => {
  const navigate = useNavigate();

  return (
    <section id="work" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Tight grid of compact cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.08, 
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="card-simple cursor-pointer group"
              onClick={() => work.route && navigate(work.route)}
            >
              {/* Image container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                />
                {/* Overlay darkens 5% on hover */}
                <motion.div
                  className="absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/5"
                />
                {work.locked && (
                  <div className="absolute top-2 right-2">
                    <Lock className="w-3 h-3 text-white/80" />
                  </div>
                )}
              </div>

              {/* Content - minimal padding */}
              <div className="p-4">
                <h3 className="text-base font-medium mb-1 transition-colors duration-150 group-hover:text-primary">
                  {work.title}
                </h3>
                <p className="text-sm text-muted-foreground">
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
