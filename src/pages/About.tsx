import { Navigation } from '@/components/Navigation';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { MapPin, Mail, Calendar, Heart, Book, Coffee } from 'lucide-react';

export default function About() {
  const timeline = [
    {
      year: '2024',
      title: 'Senior UX Designer',
      company: 'Current Role',
      description: 'Leading end-to-end design projects with focus on accessibility and user research.'
    },
    {
      year: '2023',
      title: 'UX/UI Designer',
      company: 'Product Team',
      description: 'Designed mobile experiences for 100k+ users, improved conversion by 40%.'
    },
    {
      year: '2022',
      title: 'Junior Designer',
      company: 'First Role',
      description: 'Started journey in UX with focus on wireframing and user testing.'
    },
  ];

  const currentlyLearning = [
    'AI in Design Systems',
    'Advanced Prototyping',
    'Design Leadership',
  ];

  const tools = [
    'Figma', 'Principle', 'Framer', 'After Effects', 'User Testing', 'Miro'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 animate-glow" />
            <h1 className="text-4xl font-light mb-4">About Nuno</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A curious designer who believes the best solutions come from understanding 
              people, not just problems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="p-8">
                <h2 className="text-2xl font-light mb-4">Design Philosophy</h2>
                <div className="prose text-muted-foreground space-y-4">
                  <p>
                    I approach design as a conversation between user needs and business goals. 
                    My process always starts with curiosity—understanding not just what users do, 
                    but why they do it.
                  </p>
                  <p>
                    Over the past 3 years, I've learned that the most elegant solutions often 
                    come from the smallest details. A well-timed microinteraction can communicate 
                    more than a paragraph of text.
                  </p>
                  <p>
                    I'm particularly passionate about accessibility and inclusive design. 
                    Great design should work for everyone, not just the majority.
                  </p>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-light mb-6">Journey</h2>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 bg-primary rounded-full" />
                        {index !== timeline.length - 1 && (
                          <div className="w-px h-16 bg-border mt-2" />
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm text-muted-foreground">{item.year}</span>
                        </div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-primary mb-2">{item.company}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Location
                </h3>
                <p className="text-sm text-muted-foreground">San Francisco, CA</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Currently Learning
                </h3>
                <div className="space-y-2">
                  {currentlyLearning.map((item) => (
                    <div key={item} className="text-sm text-muted-foreground">
                      • {item}
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-medium mb-4">Favorite Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <Badge key={tool} variant="secondary">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Outside Design
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Book className="w-4 h-4" />
                    Reading design psychology
                  </div>
                  <div className="flex items-center gap-2">
                    <Coffee className="w-4 h-4" />
                    Third-wave coffee enthusiast
                  </div>
                  <div>🇪🇸 Spanish (native)</div>
                  <div>🇺🇸 English (fluent)</div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Let's Connect
                </h3>
                <div className="space-y-2 text-sm">
                  <a href="mailto:nuno@example.com" className="text-primary hover:underline block">
                    nuno@example.com
                  </a>
                  <a href="https://linkedin.com/in/nuno" className="text-primary hover:underline block">
                    LinkedIn
                  </a>
                  <a href="https://dribbble.com/nuno" className="text-primary hover:underline block">
                    Dribbble
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}