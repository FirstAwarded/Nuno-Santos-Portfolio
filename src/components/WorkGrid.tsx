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
    id: 'uber-concept',
    title: 'Uber Train Integration',
    description: 'Conceptual flow integrating train booking into Uber\'s ecosystem with Live Activity features. Reduced booking time from 2 hours to 30 minutes.',
    category: 'concept',
    tags: ['Concept Design', 'iOS', 'Transportation'],
  },
  {
    id: 'umai',
    title: 'Umai Language Learning',
    description: 'Research-driven concept that transforms language learning through emotional connections. Increased user engagement by 340%.',
    category: 'research',
    tags: ['User Research', 'Mobile App', 'Language Learning'],
  },
  {
    id: 'safewalk',
    title: 'SafeWalk Navigation',
    description: 'Accessibility-focused safety app combining real-time navigation with community insights. 95% accessibility compliance achieved.',
    category: 'product',
    tags: ['Accessibility', 'Safety', 'Navigation'],
  },
  {
    id: 'health-app',
    title: 'Mobile Health Dashboard',
    description: 'Comprehensive health tracking interface designed for clarity and daily engagement. 85% daily active users maintained.',
    category: 'ui',
    tags: ['Health Tech', 'Data Visualization', 'Mobile'],
  },
  {
    id: 'corporate-dashboard',
    title: 'Enterprise Analytics',
    description: 'Complex data visualization platform simplifying enterprise decision-making. 60% faster data comprehension.',
    category: 'product',
    tags: ['Enterprise', 'Analytics', 'Dashboard'],
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
    <section id="work" className="py-32 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="display-text mb-6 font-display">Selected Work</h2>
          <p className="body-large max-w-3xl mx-auto">
            A collection of projects showcasing strategic UX thinking, 
            interface craft, and attention to meaningful details.
          </p>
        </div>

        {/* Enhanced Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="interactive-lift glass border-border/30 hover:border-primary/50"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Enhanced Work Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredItems.map((item, index) => {
            const Icon = categoryIcons[item.category];
            return (
              <article
                key={item.id}
                className="work-card group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => {
                  if (item.id === 'uber-concept') {
                    window.location.href = '/work/uber-train-integration';
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View case study: ${item.title}`}
              >
                {/* Enhanced visual */}
                <div className="h-64 bg-gradient-to-br from-primary/15 via-accent/10 to-info/10 rounded-2xl mb-6 flex items-center justify-center group-hover:from-primary/25 group-hover:via-accent/15 group-hover:to-info/15 transition-all duration-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent group-hover:via-white/10 transition-all duration-700" />
                  <Icon className="w-16 h-16 text-muted-foreground/60 group-hover:text-primary/80 transition-all duration-500 relative z-10" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-medium group-hover:text-primary transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <Badge className={`${categoryColors[item.category]} font-medium flex-shrink-0`}>
                      {item.category}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-secondary/70 text-secondary-foreground px-3 py-1.5 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all duration-300 pt-2">
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};