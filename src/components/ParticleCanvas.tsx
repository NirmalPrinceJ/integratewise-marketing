import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  icon: number;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();

    const cols = 8;
    const rows = 6;
    const particles: Particle[] = [];
    const cellW = canvas.offsetWidth / cols;
    const cellH = canvas.offsetHeight / rows;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        particles.push({
          x: i * cellW + cellW / 2 + (Math.random() - 0.5) * cellW * 0.6,
          y: j * cellH + cellH / 2 + (Math.random() - 0.5) * cellH * 0.6,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: 4 + Math.random() * 4,
          opacity: 0.3 + Math.random() * 0.5,
          icon: Math.floor(Math.random() * 4),
        });
      }
    }
    particlesRef.current = particles;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };
    canvas.addEventListener('mousemove', onMouseMove, { passive: true });
    canvas.addEventListener('mouseleave', onMouseLeave);

    const drawIcon = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.strokeStyle = p.x < canvas.offsetWidth / 2 ? 'rgba(139,32,32,0.6)' : 'rgba(26,58,42,0.7)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      const s = p.size;
      switch (p.icon % 4) {
        case 0: // square
          ctx.rect(-s, -s, s * 2, s * 2);
          break;
        case 1: // circle
          ctx.arc(0, 0, s, 0, Math.PI * 2);
          break;
        case 2: // triangle
          ctx.moveTo(0, -s);
          ctx.lineTo(s, s);
          ctx.lineTo(-s, s);
          ctx.closePath();
          break;
        case 3: // diamond
          ctx.moveTo(0, -s);
          ctx.lineTo(s, 0);
          ctx.lineTo(0, s);
          ctx.lineTo(-s, 0);
          ctx.closePath();
          break;
      }
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const threshold = 120;

      for (const p of particlesRef.current) {
        // Mouse repulsion
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < threshold && dist > 0) {
          const force = (threshold - dist) / threshold * 1.5;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // Damping
        p.vx *= 0.96;
        p.vy *= 0.96;

        // Random drift
        p.vx += (Math.random() - 0.5) * 0.02;
        p.vy += (Math.random() - 0.5) * 0.02;

        p.x += p.vx;
        p.y += p.vy;

        // Bounds
        if (p.x < 20) { p.x = 20; p.vx *= -0.5; }
        if (p.x > w - 20) { p.x = w - 20; p.vx *= -0.5; }
        if (p.y < 20) { p.y = 20; p.vy *= -0.5; }
        if (p.y > h - 20) { p.y = h - 20; p.vy *= -0.5; }

        drawIcon(p);
      }

      // Draw connections
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const a = particlesRef.current[i];
          const b = particlesRef.current[j];
          const d = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
          if (d < 100) {
            const alpha = (1 - d / 100) * 0.25;
            ctx.strokeStyle = `rgba(26,58,42,${alpha})`;
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 4]);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ cursor: 'crosshair' }}
    />
  );
}
