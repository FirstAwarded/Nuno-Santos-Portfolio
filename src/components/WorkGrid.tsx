import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Import mockup images
import oartMockup from '@/assets/oart-mockup.jpg';
import safewalkMockup from '@/assets/safewalk-mockup.jpg';
import umaiMockup from '@/assets/umai-mockup.jpg';
import enterpriseMockup from '@/assets/enterprise-mockup.jpg';
import healthMockup from '@/assets/health-mockup.jpg';
import motionMockup from '@/assets/motion-mockup.jpg';
import datavizMockup from '@/assets/dataviz-mockup.jpg';
import designsystemMockup from '@/assets/designsystem-mockup.jpg';
import fintechMockup from '@/assets/fintech-mockup.jpg';

interface WorkItem {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'mobile' | 'system';
  tags: string[];
  image: string;
  route?: string;
}

const workItems: WorkItem[] = [
  {
    id: 'oart',
    title: 'OART — Scalable UX for Enterprise Workflows',
    description: 'Replaced legacy systems with scalable application that cut approval time by 75%',
    category: 'web',
    tags: ['Enterprise', 'Workflows', 'Case Study'],
    image: oartMockup,
    route: '/work/oart'
  },
  {
    id: 'safewalk',
    title: 'SafeWalk — Safety-First Navigation',
    description: 'Navigation app that prioritizes safety over speed for nighttime walking',
    category: 'mobile',
    tags: ['Mobile App', 'Safety', 'Navigation'],
    image: safewalkMockup,
    route: '/work/safewalk'
  },
  {
    id: 'umai',
    title: 'Umai — Personalizing the Ordering Experience',
    description: 'Food ordering platform that reduced order time by 30% through smart personalization',
    category: 'mobile',
    tags: ['Mobile App', 'Food Tech', 'Personalization'],
    image: umaiMockup,
    route: '/work/umai'
  },
  {
    id: 'enterprise-platform',
    title: 'Enterprise Platform',
    description: 'Six-figure savings through streamlined approval workflows',
    category: 'web',
    tags: ['Enterprise', 'Workflows', 'Efficiency'],
    image: enterpriseMockup
  },
  {
    id: 'health-tooling',
    title: 'Health Tooling',
    description: 'Patient-centered experience reducing onboarding friction',
    category: 'mobile',
    tags: ['Healthcare', 'Patient Care', 'Mobile'],
    image: healthMockup
  },
  {
    id: 'motion-prototype',
    title: 'Motion Prototype',
    description: 'Live Activity system with seamless microinteractions',
    category: 'system',
    tags: ['Motion', 'Prototyping', 'iOS'],
    image: motionMockup
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization',
    description: 'Complex enterprise dashboards made intuitive',
    category: 'web',
    tags: ['Data Viz', 'Dashboard', 'Analytics'],
    image: datavizMockup
  },
  {
    id: 'design-system',
    title: 'Design System',
    description: 'Scalable component library for rapid development',
    category: 'system',
    tags: ['Design System', 'Components', 'Scalability'],
    image: designsystemMockup
  },
  {
    id: 'fintech-platform',
    title: 'Fintech Platform',
    description: 'Secure financial tools with enhanced accessibility',
    category: 'web',
    tags: ['Fintech', 'Security', 'Accessibility'],
    image: fintechMockup
  }
];

const categoryColors = {
  web: 'bg-primary text-primary-foreground',
  mobile: 'bg-accent text-accent-foreground',
  system: 'bg-secondary text-secondary-foreground',
};

export const WorkGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const navigate = useNavigate();

  const filteredItems = selectedCategory === 'all' 
    ? workItems 
    : workItems.filter(item => item.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'system', label: 'System' },
  ];

  const handleItemClick = (item: WorkItem) => {
    if (item.route) {
      navigate(item.route);
    } else {
      // Future navigation logic for other items
      console.log('Navigate to:', item.id);
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="display-text mb-6 font-display">Selected Work</h2>
          <p className="body-large max-w-3xl mx-auto">
            A collection of projects showcasing strategic UX thinking, 
            interface craft, and attention to meaningful details.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="transition-all duration-200 hover:scale-105"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Work Grid with image previews */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => {
            const colorClass = categoryColors[item.category];
            
            return (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 hover:border-primary/30 cursor-pointer"
                onClick={() => handleItemClick(item)}
              >
                {/* Image Preview */}
                <div className="relative h-48 overflow-hidden rounded-t-3xl">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${colorClass} backdrop-blur-sm`}>
                      {item.category}
                    </div>
                  </div>
                </div>
                
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
                        className="px-2 py-1 bg-muted/50 rounded-full text-xs text-muted-foreground group-hover:bg-muted/70 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Case Study Indicator */}
                  {item.route && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};