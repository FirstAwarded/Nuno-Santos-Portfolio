import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';

// Import mockup images
import oartMockup from '@/assets/oart-mockup.jpg';
import safewalkMockup from '@/assets/SafewalkBannerImage.png';
import umaiMockup from '@/assets/UmaiBannerImage.png';

interface WorkItem {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'mobile' | 'system';
  tags: string[];
  image: string;
  route?: string;
  locked?: boolean;
}

const workItems: WorkItem[] = [
  {
    id: 'oart',
    title: 'Scalable UX for Enterprise Workflows',
    description: 'Replaced legacy systems with scalable application that cut approval time by 75%',
    category: 'web',
    tags: ['Enterprise', 'Workflows', 'Case Study'],
    image: oartMockup,
    route: '/work/enterprise/otgate', // redirect to password gate
    locked: true,
  },
  {
    id: 'safewalk',
    title: 'SafeWalk - Safety-First Navigation',
    description: 'Navigation app that prioritizes safety over speed for nighttime walking',
    category: 'mobile',
    tags: ['Mobile App', 'Safety', 'Navigation'],
    image: safewalkMockup,
    route: '/work/safewalk',
  },
  {
    id: 'umai',
    title: 'Umai - Personalizing the Ordering Experience',
    description: 'Food ordering platform that reduced order time by 30% through smart personalization',
    category: 'mobile',
    tags: ['Mobile App', 'Food Tech', 'Personalization'],
    image: umaiMockup,
    route: '/work/umai',
  },
];

const categoryColors = {
  web: 'bg-primary text-primary-foreground',
  mobile: 'bg-accent text-accent-foreground',
  system: 'bg-secondary text-secondary-foreground',
};

export const WorkGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredItems =
    selectedCategory === 'all'
      ? workItems
      : workItems.filter((item) => item.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'system', label: 'System' },
  ];

  const handleItemClick = (item: WorkItem) => {
    if (item.route) {
      navigate(item.route);
    }
  };

  return (
    <section id="work" ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="display-text mb-6 font-display">Selected Work</h2>
          <p className="body-large max-w-3xl mx-auto">
            A collection of projects showcasing strategic UX thinking,
            interface craft, and attention to meaningful details.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="transition-all duration-200 hover:scale-105"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Work Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => {
            const colorClass = categoryColors[item.category];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:shadow-xl transition-all duration-500 cursor-pointer"
                onClick={() => handleItemClick(item)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden rounded-t-3xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${colorClass} backdrop-blur-sm`}
                    >
                      {item.category}
                    </span>
                    {item.locked && (
                      <Lock className="w-4 h-4 text-white/80" />
                    )}
                  </div>
                </div>

                {/* Card content */}
                <div className="relative p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-muted/50 rounded-full text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {item.route && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
