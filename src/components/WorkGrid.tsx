import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, ArrowRight, Search, Palette, Brain, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface WorkItem {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'mobile' | 'system';
  tags: string[];
}

const workItems: WorkItem[] = [
  {
    id: 'enterprise-platform',
    title: 'Enterprise platform',
    description: 'Six-figure savings through streamlined approval workflows',
    category: 'web',
    tags: ['Enterprise', 'Workflows', 'Efficiency']
  },
  {
    id: 'health-tooling',
    title: 'Health tooling',
    description: 'Patient-centered experience reducing onboarding friction',
    category: 'mobile',
    tags: ['Healthcare', 'Patient Care', 'Mobile']
  },
  {
    id: 'motion-prototype',
    title: 'Motion prototype',
    description: 'Live Activity system with seamless microinteractions',
    category: 'system',
    tags: ['Motion', 'Prototyping', 'iOS']
  },
  {
    id: 'data-visualization',
    title: 'Data visualization',
    description: 'Complex enterprise dashboards made intuitive',
    category: 'web',
    tags: ['Data Viz', 'Dashboard', 'Analytics']
  },
  {
    id: 'design-system',
    title: 'Design system',
    description: 'Scalable component library for rapid development',
    category: 'system',
    tags: ['Design System', 'Components', 'Scalability']
  },
  {
    id: 'fintech-platform',
    title: 'Fintech platform',
    description: 'Secure financial tools with enhanced accessibility',
    category: 'web',
    tags: ['Fintech', 'Security', 'Accessibility']
  },
  {
    id: 'oart',
    title: 'OART Case Study',
    description: 'Enterprise workflow redesign',
    category: 'web',
    tags: ['Enterprise', 'Workflows', 'Case Study']
  }
];

const categoryIcons = {
  web: Zap,
  mobile: Palette,
  system: Brain,
};

const categoryColors = {
  web: 'bg-primary text-primary-foreground',
  mobile: 'bg-accent text-accent-foreground',
  system: 'bg-info text-white',
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
    if (item.id === 'oart') {
      navigate('/work/oart');
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

        {/* Work Grid with mask reveal effect */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => {
            const Icon = categoryIcons[item.category];
            const colorClass = categoryColors[item.category];
            
            return (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 hover:border-primary/30 cursor-pointer"
                onClick={() => handleItemClick(item)}
              >
                {/* Mask reveal effect on hover - left to right wipe */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-2xl ${colorClass}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${colorClass}`}>
                      {item.category}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted/50 rounded-full text-xs text-muted-foreground group-hover:bg-muted/70 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};