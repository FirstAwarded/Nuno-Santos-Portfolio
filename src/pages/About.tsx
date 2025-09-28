import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { MapPin, Mail, Calendar, Heart, Book, Coffee,Dumbbell } from 'lucide-react';
import profilepicture from '@/assets/profilepicture.jpeg';

export default function About() {
  const timeline = [
    {
      year: '2022 - Present',
      title: 'Service Designer',
      company: 'Current Role',
      description: 'Leading end-to-end design projects with focus on accessibility and user research.'
    },
    {
      year: '2022',
      title: 'UX/UI Designer',
      company: 'Internship (3 months)',
      description: 'Designed mobile experiences for users, improved conversion by 17%.'
    },
  ];

  const currentlyLearning = [
    'Interaction design and motion',
    'Advance UXR methods',
    'Storytelling for impact',
  ];

  const tools = [
    'Figma', 'Principle', 'Framer', 'After Effects', 'User Testing', 'Miro'
  ];

  return (
    <div className="min-h-screen bg-background">
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <img src={profilepicture} alt="Profile Picture" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
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
                  I approach design as a conversation between user needs and business goals. I’m a product-minded service designer who lives where processes, people, and outcomes meet, turning ambiguity into clear flows and confident decisions.
                  </p>
                  <p>
                    My process starts with curiosity. I map the system, trace constraints, and ship thin slices early to learn fast. I care about outcomes, so I measure before and after to prove what changed.
                  </p>
                  <p>
                    Over the past few years I’ve learned that small details unlock big wins. A well-timed microinteraction, a sharper empty state, or clearer guidance can move adoption more than a long explainer.
                  </p>
                  <p>
                    I’m passionate about accessibility and inclusive design. Great products should work for everyone. My aim is simple: design experiences that feel obvious, scale reliably, and make their value visible in the numbers.
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
                <p className="text-sm text-muted-foreground">United Kingdom</p>
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
      <Dumbbell className="w-4 h-4" />
      Strength training
    </div>
    <div className="flex items-center gap-2">
      <Book className="w-4 h-4" />
      Reading philosophy
    </div>
    <div className="flex items-center gap-2">
      <Coffee className="w-4 h-4" />
      Probably drinking too much coffee
    </div>
    <div>pt Portuguese (native)</div>
    <div>🇺🇸 English (fluent)</div>
  </div>
</Card>

              <Card className="p-6">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Let's Connect
                </h3>
                <div className="space-y-2 text-sm">
                  <a href="mailto:nunorgsantosdesigner@gmail.com" className="text-primary hover:underline block">
                    Email
                  </a>
                  <a href="https://www.linkedin.com/in/nunorgsantos/" className="text-primary hover:underline block">
                    LinkedIn
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