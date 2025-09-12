import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

interface MeshBackgroundProps {
  className?: string;
}

export const MeshBackground = ({ className = '' }: MeshBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

    // Apple keynote style - blue anchor with purple/teal depth
    const colorsLight = [
      'rgba(59, 130, 246, 0.4)',   // Blue anchor
      'rgba(139, 92, 246, 0.3)',   // Purple depth
      'rgba(6, 182, 212, 0.25)',   // Teal accent
      'rgba(99, 102, 241, 0.2)',   // Indigo complement
      'rgba(34, 197, 94, 0.15)'    // Subtle green
    ];
    
    const colorsDark = [
      'rgba(96, 165, 250, 0.6)',   // Brighter blue for dark
      'rgba(168, 85, 247, 0.5)',   // Rich purple
      'rgba(34, 211, 238, 0.4)',   // Cyan highlight
      'rgba(129, 140, 248, 0.35)', // Soft indigo
      'rgba(52, 211, 153, 0.25)'   // Emerald accent
    ];

    const palette = theme === 'dark' ? colorsDark : colorsLight;

    const animate = () => {
      time += 0.0015; // Slower, breathing motion (12-16s loop)
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const scale = Math.min(width, height) / 1000;

      // Gentle cursor parallax (≤6px)
      const parallaxX = (mousePos.x / window.innerWidth - 0.5) * 6;
      const parallaxY = (mousePos.y / window.innerHeight - 0.5) * 6;

      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'lighter';

      // Multiple organic gradient blobs
      for (let i = 0; i < palette.length; i++) {
        const baseX = width * (0.3 + i * 0.15);
        const baseY = height * (0.4 + i * 0.1);
        
        // Breathing motion with different frequencies
        const breatheX = Math.sin(time * (1 + i * 0.3)) * (80 + i * 30) * scale;
        const breatheY = Math.cos(time * (0.8 + i * 0.2)) * (60 + i * 25) * scale;
        
        const x = baseX + breatheX + parallaxX;
        const y = baseY + breatheY + parallaxY;
        
        // Variable radii for organic feel
        const radius = (300 + i * 80 + Math.sin(time * 2 + i) * 50) * scale;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, palette[i]);
        gradient.addColorStop(0.7, palette[i].replace(/[\d\.]+\)$/g, '0.05)'));
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      // Add subtle mesh overlay
      ctx.globalCompositeOperation = 'overlay';
      const meshGradient = ctx.createLinearGradient(0, 0, width, height);
      meshGradient.addColorStop(0, theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)');
      meshGradient.addColorStop(0.5, 'transparent');
      meshGradient.addColorStop(1, theme === 'dark' ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.05)');
      
      ctx.fillStyle = meshGradient;
      ctx.fillRect(0, 0, width, height);

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
  }, [theme, mousePos]);

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
