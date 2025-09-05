import { useState } from 'react';
import { ExternalLink, ArrowRight, Search, Palette, Brain, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface WorkItem {
  id: string;
  title: string;
  description: string;
  category: 'research' | 'ui' | 'product' | 'concept';
  tags: string[];
  image?: string;
  link?: string;
}

const workItems: WorkItem[] = [
  {
    id: 'umai',
    title: 'Umai Language Learning',
    description: 'Research-driven concept that transforms language learning through emotional connections and cultural immersion.',
    category: 'research',
    tags: ['User Research', 'Mobile App', 'Language Learning'],
  },
  {
    id: 'safewalk',
    title: 'SafeWalk Navigation',
    description: 'Accessibility-focused safety app that combines real-time navigation with community-driven safety insights.',
    category: 'product',
    tags: ['Accessibility', 'Safety', 'Navigation'],
  },
  {
    id: 'health-app',
    title: 'Mobile Health Dashboard',
    description: 'Comprehensive health tracking interface designed for clarity and daily engagement.',
    category: 'ui',
    tags: ['Health Tech', 'Data Visualization', 'Mobile'],
  },
  {
    id: 'corporate-dashboard',
    title: 'Enterprise Analytics',
    description: 'Complex data visualization platform that simplifies enterprise decision-making processes.',
    category: 'product',
    tags: ['Enterprise', 'Analytics', 'Dashboard'],
  },
  {
    id: 'uber-concept',
    title: 'Uber Train Integration',
    description: 'Conceptual flow integrating train booking into Uber\'s ecosystem with Live Activity features.',
    category: 'concept',
    tags: ['Concept Design', 'iOS', 'Transportation'],
  },
];

const categoryIcons = {
  research: Brain,
  ui: Palette,
  product: Zap,
  concept: Search,
};

const categoryColors = {
  research: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  ui: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
  product: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  concept: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
};

export const WorkGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredItems = selectedCategory === 'all' 
    ? workItems 
    : workItems.filter(item => item.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'research', label: 'Research-Heavy' },
    { id: 'ui', label: 'UI-Focused' },
    { id: 'product', label: 'Product Design' },
    { id: 'concept', label: 'Conceptual' },
  ];

  return (
    <section id="work" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-light mb-4">Selected Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
              className="interactive"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => {
            const Icon = categoryIcons[item.category];
            return (
              <div
                key={item.id}
                className="work-card group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => {
                  if (item.id === 'uber-concept') {
                    window.location.href = '/work/uber-train-integration';
                  }
                }}
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500">
                  <Icon className="w-12 h-12 text-muted-foreground/50" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <Badge className={categoryColors[item.category]}>
                      {item.category}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-primary text-sm group-hover:gap-2 transition-all duration-300">
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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