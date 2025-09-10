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
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };


    const colorsDark = [
      'rgba(96,105,255,0.35)',
      'rgba(168,85,247,0.3)',
      'rgba(236,72,153,0.25)',
      'rgba(14,165,233,0.2)'
    ];
    const colorsLight = [
      'rgba(96,105,255,0.15)',
      'rgba(168,85,247,0.12)',
      'rgba(236,72,153,0.12)',
      'rgba(14,165,233,0.1)'
    ];
    const palette = theme === 'dark' ? colorsDark : colorsLight;

    const createGradient = (x1: number, y1: number, x2: number, y2: number, radius: number) => {
      const gradient = ctx.createRadialGradient(x1, y1, 0, x2, y2, radius);
      
      if (theme === 'dark') {
        // Apple-inspired dark mode: deeper blues, purples, and teals
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.6)'); // Blue
        gradient.addColorStop(0.2, 'rgba(147, 51, 234, 0.5)'); // Purple
        gradient.addColorStop(0.4, 'rgba(236, 72, 153, 0.4)'); // Pink
        gradient.addColorStop(0.6, 'rgba(34, 197, 94, 0.3)'); // Green
        gradient.addColorStop(0.8, 'rgba(251, 191, 36, 0.2)'); // Yellow
        gradient.addColorStop(1, 'rgba(15, 23, 42, 0.9)');
      } else {
        // Apple-inspired light mode: soft, vibrant colors
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.25)'); // Blue
        gradient.addColorStop(0.2, 'rgba(147, 51, 234, 0.2)'); // Purple
        gradient.addColorStop(0.4, 'rgba(236, 72, 153, 0.15)'); // Pink
        gradient.addColorStop(0.6, 'rgba(34, 197, 94, 0.12)'); // Green
        gradient.addColorStop(0.8, 'rgba(251, 191, 36, 0.1)'); // Yellow
        gradient.addColorStop(1, 'rgba(248, 250, 252, 0.95)');
      }
      
      return gradient;
    };


    const animate = () => {
      time += 0.003; // slower
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      ctx.clearRect(0, 0, width, height);

      ctx.globalCompositeOperation = 'lighter';

      for (let i = 0; i < palette.length; i++) {
        const x = width / 2 + Math.sin(time + i) * (200 + i * 50);
        const y = height / 2 + Math.cos(time * 0.7 + i) * (150 + i * 40);
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 400);
        gradient.addColorStop(0, palette[i]);
        gradient.addColorStop(1, 'transparent');


      
      // Create multiple organic mesh gradients
      for (let i = 0; i < 5; i++) {
        const scale = Math.min(width, height) * 0.4;
        const x = width/2 + Math.sin(time * 0.3 + i * 1.2) * scale * 0.7;
        const y = height/2 + Math.cos(time * 0.2 + i * 0.8) * scale * 0.5;
        const x2 = width/2 + Math.cos(time * 0.4 + i * 1.5) * scale * 0.8;
        const y2 = height/2 + Math.sin(time * 0.25 + i * 1.1) * scale * 0.6;
        const radius = scale * (0.8 + Math.sin(time * 0.5 + i) * 0.3);
        
        const gradient = createGradient(x, y, x2, y2, radius);
        ctx.globalCompositeOperation = (i === 0 ? 'source-over' : 'multiply') as GlobalCompositeOperation;

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }


      ctx.globalCompositeOperation = 'source-over';

      
      ctx.globalCompositeOperation = 'source-over' as GlobalCompositeOperation;
      
      // Add subtle noise texture
      const noiseIntensity = theme === 'dark' ? 0.015 : 0.008;
      const noiseOpacity = noiseIntensity + Math.sin(time * 1.5) * (noiseIntensity * 0.3);
      
      if (theme === 'dark') {
        ctx.fillStyle = `rgba(255, 255, 255, ${noiseOpacity})`;
      } else {
        ctx.fillStyle = `rgba(0, 0, 0, ${noiseOpacity})`;
      }
      
      // Reduce noise density for cleaner look
      for (let i = 0; i < width * height / 2000; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        ctx.fillRect(x, y, Math.random() > 0.5 ? 1 : 0.5, Math.random() > 0.5 ? 1 : 0.5);
      }
      
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{
        width: '100%',
        height: '100%'
      }}
    />
  );
};
