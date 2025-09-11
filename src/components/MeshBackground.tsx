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
      ctx.setTransform(1, 0, 0, 1, 0, 0);
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

    const animate = () => {
      time += 0.003;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const scale = Math.min(width, height) / 800; // responsive factor

      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'lighter';

      for (let i = 0; i < palette.length; i++) {
        const offset = 150 * scale + i * 40 * scale;
        const radius = 350 * scale + i * 50 * scale;

        const x = width / 2 + Math.sin(time + i) * offset * 1.2;
        const y = height / 2 + Math.cos(time * 0.7 + i) * offset;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, palette[i]);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      ctx.globalCompositeOperation = 'source-over';
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
