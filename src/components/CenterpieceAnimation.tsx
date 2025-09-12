import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

interface CenterpieceAnimationProps {
  className?: string;
}

export const CenterpieceAnimation = ({ className = '' }: CenterpieceAnimationProps) => {
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
      canvas.width = 400;
      canvas.height = 300;
    };

    // Abstract shapes representing chaos → clarity
    const shapes = [
      { x: 50, y: 80, targetX: 100, targetY: 100, size: 20, type: 'circle' },
      { x: 200, y: 40, targetX: 150, targetY: 100, size: 25, type: 'square' },
      { x: 350, y: 120, targetX: 200, targetY: 100, size: 18, type: 'circle' },
      { x: 80, y: 200, targetX: 250, targetY: 100, size: 22, type: 'triangle' },
      { x: 300, y: 180, targetX: 300, targetY: 100, size: 20, type: 'square' },
      { x: 120, y: 250, targetX: 100, targetY: 150, size: 16, type: 'circle' },
      { x: 280, y: 260, targetX: 150, targetY: 150, size: 24, type: 'square' },
      { x: 40, y: 160, targetX: 200, targetY: 150, size: 19, type: 'triangle' },
      { x: 360, y: 60, targetX: 250, targetY: 150, size: 21, type: 'circle' },
      { x: 180, y: 280, targetX: 300, targetY: 150, size: 17, type: 'square' }
    ];

    const animate = () => {
      time += 0.008; // 6-8s cycle
      const width = canvas.width;
      const height = canvas.height;
      
      ctx.clearRect(0, 0, width, height);
      
      // Determine animation phase (0-1 over 8 seconds)
      const cycle = (time % 8) / 8;
      let progress = 0;
      
      if (cycle < 0.7) {
        // Reorganization phase (0-70% of cycle)
        progress = cycle / 0.7;
        progress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
      } else if (cycle < 0.85) {
        // Hold organized state
        progress = 1;
      } else {
        // Return to chaos (85-100% of cycle)
        progress = 1 - ((cycle - 0.85) / 0.15);
        progress = Math.pow(progress, 3); // Ease in cubic
      }

      const color = theme === 'dark' ? 'rgba(96, 165, 250, 0.8)' : 'rgba(59, 130, 246, 0.8)';
      
      shapes.forEach((shape, index) => {
        // Interpolate between chaos and order
        const currentX = shape.x + (shape.targetX - shape.x) * progress;
        const currentY = shape.y + (shape.targetY - shape.y) * progress;
        
        // Add slight hover/breathing effect
        const breatheOffset = Math.sin(time * 2 + index * 0.5) * 2;
        
        ctx.fillStyle = color;
        ctx.beginPath();
        
        switch (shape.type) {
          case 'circle':
            ctx.arc(currentX + breatheOffset, currentY, shape.size * 0.4, 0, Math.PI * 2);
            break;
          case 'square':
            const size = shape.size * 0.8;
            ctx.rect(currentX - size/2 + breatheOffset, currentY - size/2, size, size);
            break;
          case 'triangle':
            const triSize = shape.size * 0.6;
            ctx.moveTo(currentX + breatheOffset, currentY - triSize);
            ctx.lineTo(currentX - triSize + breatheOffset, currentY + triSize);
            ctx.lineTo(currentX + triSize + breatheOffset, currentY + triSize);
            ctx.closePath();
            break;
        }
        
        ctx.fill();
      });

      // Final check pulse (when organized)
      if (progress > 0.95 && cycle < 0.8) {
        const checkOpacity = Math.sin((time % 1) * Math.PI * 2) * 0.3 + 0.7;
        ctx.strokeStyle = theme === 'dark' ? `rgba(52, 211, 153, ${checkOpacity})` : `rgba(34, 197, 94, ${checkOpacity})`;
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        
        // Simple checkmark
        ctx.beginPath();
        ctx.moveTo(180, 200);
        ctx.lineTo(200, 220);
        ctx.lineTo(240, 180);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`max-w-full h-auto ${className}`}
      style={{ width: '400px', height: '300px' }}
    />
  );
};