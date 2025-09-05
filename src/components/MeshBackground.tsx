import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

interface MeshBackgroundProps {
  className?: string;
}

export const MeshBackground = ({ className = '' }: MeshBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    const createGradient = (x1: number, y1: number, x2: number, y2: number) => {
      const gradient = ctx.createRadialGradient(x1, y1, 0, x2, y2, 300);
      
      if (theme === 'dark') {
        gradient.addColorStop(0, 'rgba(96, 105, 255, 0.4)');
        gradient.addColorStop(0.3, 'rgba(168, 85, 247, 0.3)');
        gradient.addColorStop(0.6, 'rgba(59, 130, 246, 0.2)');
        gradient.addColorStop(1, 'rgba(15, 23, 42, 0.8)');
      } else {
        gradient.addColorStop(0, 'rgba(96, 105, 255, 0.15)');
        gradient.addColorStop(0.3, 'rgba(168, 85, 247, 0.1)');
        gradient.addColorStop(0.6, 'rgba(59, 130, 246, 0.08)');
        gradient.addColorStop(1, 'rgba(248, 250, 252, 0.9)');
      }
      
      return gradient;
    };

    const animate = () => {
      time += 0.01;
      
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      
      ctx.clearRect(0, 0, width, height);
      
      // Create multiple moving gradients
      for (let i = 0; i < 3; i++) {
        const x = width/2 + Math.sin(time + i * 2) * 100;
        const y = height/2 + Math.cos(time * 0.7 + i * 1.5) * 80;
        const x2 = width/2 + Math.cos(time * 0.5 + i * 3) * 150;
        const y2 = height/2 + Math.sin(time * 0.3 + i * 2) * 120;
        
        const gradient = createGradient(x, y, x2, y2);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }
      
      // Add noise texture
      if (theme === 'dark') {
        ctx.fillStyle = `rgba(255, 255, 255, ${0.02 + Math.sin(time * 2) * 0.01})`;
      } else {
        ctx.fillStyle = `rgba(0, 0, 0, ${0.03 + Math.sin(time * 2) * 0.015})`;
      }
      
      for (let i = 0; i < width * height / 1000; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        ctx.fillRect(x, y, 1, 1);
      }
      
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ mixBlendMode: theme === 'dark' ? 'screen' : 'multiply' }}
    />
  );
};