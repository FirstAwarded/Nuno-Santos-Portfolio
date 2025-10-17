import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import oartMockup from '@/assets/oart-mockup.jpg';
import safewalkMockup from '@/assets/SafewalkBannerImage.png';
import umaiMockup from '@/assets/UmaiBannerImage.png';

interface WorkPanel {
  id: string;
  title: string;
  description: string;
  image: string;
  route: string;
}

const workPanels: WorkPanel[] = [
  {
    id: 'oart',
    title: 'OART',
    description: 'Rebuilt enterprise approvals → 75% faster.',
    image: oartMockup,
    route: '/work/enterprise/otgate',
  },
  {
    id: 'safewalk',
    title: 'SafeWalk',
    description: 'Safety-first navigation for night travel.',
    image: safewalkMockup,
    route: '/work/safewalk',
  },
  {
    id: 'umai',
    title: 'Umai',
    description: 'Personalized ordering → 30% quicker checkout.',
    image: umaiMockup,
    route: '/work/umai',
  },
];

export const EngineeredWork = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="work" ref={ref} className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-8">
          {workPanels.map((panel, index) => (
            <motion.div
              key={panel.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.2, delay: index * 0.08 }}
              className="work-panel group cursor-pointer"
              onClick={() => navigate(panel.route)}
            >
              <div className="grid md:grid-cols-[2fr_1fr] gap-0">
                {/* Image - 4:3 ratio */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={panel.image}
                    alt={panel.title}
                    className="w-full h-full object-cover transition-transform duration-200"
                    whileHover={{ scale: 1.02 }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-200" />
                </div>
                
                {/* Text */}
                <div className="flex flex-col justify-center p-8">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
                    {panel.title}
                  </h3>
                  <p className="body-engineered">
                    {panel.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
