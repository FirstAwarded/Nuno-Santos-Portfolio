import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const philosophies = [
  'Discipline over comfort.',
  'Clarity over noise.',
  'Proof over promises.'
];

const TypewriterText = ({ text, delay = 0, onComplete }: { text: string; delay?: number; onComplete?: () => void }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay + 80 + Math.random() * 40); // Variable typing speed for realism

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, delay, onComplete]);

  return (
    <span>
      {displayText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-0.5 h-8 bg-foreground ml-1"
        />
      )}
    </span>
  );
};

export const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [startTyping, setStartTyping] = useState([false, false, false]);

  const handleComplete = (index: number) => {
    setTimeout(() => {
      if (index < 2) {
        setStartTyping(prev => {
          const newState = [...prev];
          newState[index + 1] = true;
          return newState;
        });
      }
    }, 800);
  };

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setStartTyping(prev => {
          const newState = [...prev];
          newState[0] = true;
          return newState;
        });
      }, 500);
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-32 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {philosophies.map((philosophy, index) => (
            <motion.div
              key={index}
              className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-foreground"
              style={{ fontWeight: 200 }}
            >
              {startTyping[index] && (
                <TypewriterText
                  text={philosophy}
                  delay={0}
                  onComplete={() => handleComplete(index)}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};