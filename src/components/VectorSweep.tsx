import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

interface VectorSweepProps {
  className?: string;
}

export const VectorSweep = ({ className = '' }: VectorSweepProps) => {
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
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    const animate = () => {
      time += 0.008; // 6-8s seamless loop
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      ctx.clearRect(0, 0, width, height);
      
      // Vector line colors - refined for brand
      const strokeColor = theme === 'dark' ? 'rgba(96, 165, 250, 0.4)' : 'rgba(59, 130, 246, 0.3)';
      const accentColor = theme === 'dark' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(139, 92, 246, 0.25)';

      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1.5;
      ctx.lineCap = 'round';

      // Vector sweep paths - thin lines that gently sweep and align
      const paths = [
        {
          startX: width * 0.1,
          startY: height * 0.2,
          endX: width * 0.9,
          endY: height * 0.25,
          phase: 0,
          color: strokeColor
        },
        {
          startX: width * 0.15,
          startY: height * 0.4,
          endX: width * 0.85,
          endY: height * 0.42,
          phase: Math.PI / 3,
          color: accentColor
        },
        {
          startX: width * 0.2,
          startY: height * 0.6,
          endX: width * 0.8,
          endY: height * 0.61,
          phase: Math.PI / 2,
          color: strokeColor
        },
        {
          startX: width * 0.25,
          startY: height * 0.8,
          endX: width * 0.75,
          endY: height * 0.79,
          phase: Math.PI,
          color: accentColor
        }
      ];

      paths.forEach((path, index) => {
        ctx.strokeStyle = path.color;
        
        // Smooth sweeping motion with gentle curve
        const progress = (Math.sin(time + path.phase) + 1) / 2;
        const sweepProgress = Math.sin(time * 0.7 + path.phase * 2) * 0.1;
        
        // Calculate current position along sweep
        const currentX = path.startX + (path.endX - path.startX) * progress;
        const currentY = path.startY + (path.endY - path.startY) * progress + sweepProgress * 20;
        
        // Draw the vector line
        ctx.beginPath();
        
        if (progress < 0.95) {
          // Sweeping phase - curved path
          const controlX = (path.startX + currentX) / 2 + Math.sin(time + index) * 15;
          const controlY = (path.startY + currentY) / 2 + Math.cos(time + index) * 10;
          
          ctx.moveTo(path.startX, path.startY);
          ctx.quadraticCurveTo(controlX, controlY, currentX, currentY);
        } else {
          // Aligned phase - straight line
          const alignProgress = (progress - 0.95) / 0.05;
          const finalX = path.startX + (path.endX - path.startX) * (0.95 + alignProgress * 0.05);
          const finalY = path.startY + (path.endY - path.startY) * (0.95 + alignProgress * 0.05);
          
          ctx.moveTo(path.startX, path.startY);
          ctx.lineTo(finalX, finalY);
        }
        
        ctx.stroke();
        
        // Add subtle end dot when aligned
        if (progress > 0.9) {
          const dotOpacity = (progress - 0.9) / 0.1;
          const dotSize = 2 * dotOpacity;
          
          ctx.fillStyle = path.color.replace(/[\d\.]+\)$/, `${0.6 * dotOpacity})`);
          ctx.beginPath();
          ctx.arc(currentX, currentY, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Static aligned state for reduced motion
      time = Math.PI / 2; // Show aligned state
      resizeCanvas();
      animate();
    } else {
      resizeCanvas();
      animate();
      
      window.addEventListener('resize', resizeCanvas);
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      if (!prefersReducedMotion) {
        window.removeEventListener('resize', resizeCanvas);
      }
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{
        width: '100%',
        height: '100%'
      }}
      aria-hidden="true"
    />
  );
};