import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useTheme } from 'next-themes';

const contactLinks = [
  {
    icon: Mail,
    href: 'mailto:hello@nuno.design',
    label: 'Email'
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/nunosas',
    label: 'LinkedIn'
  },
  {
    icon: Github,
    href: 'https://github.com/nunosas',
    label: 'GitHub'
  }
];

export const ContactSection = () => {
  const { theme } = useTheme();

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-16 text-muted-foreground">
            Let's connect.
          </h2>

          <div className="flex justify-center gap-8 md:gap-12">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1] 
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: true }}
                >
                  <div className="p-4 rounded-full bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 group-hover:shadow-lg">
                    <Icon 
                      className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors duration-300" 
                      style={{
                        filter: theme === 'dark' ? 'drop-shadow(0 0 8px hsl(var(--primary) / 0.3))' : 'none'
                      }}
                    />
                  </div>
                  
                  {/* Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-foreground text-background text-sm rounded-lg whitespace-nowrap pointer-events-none"
                  >
                    {link.label}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-foreground" />
                  </motion.div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};