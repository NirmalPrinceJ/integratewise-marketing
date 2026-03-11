import { useRef, useEffect, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════════════════
   ANTI-GRAVITY CONFETTI CANVAS
   Inspired by Google Antigravity — colorful dots/confetti floating UPWARD
   on a clean white/transparent background. Light, playful, airy.
   ═══════════════════════════════════════════════════════════════════════ */

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  color: string;
  rotation: number;
  rotSpeed: number;
  shape: "circle" | "square" | "diamond";
}

const COLORS = [
  "#4f46e5", // indigo
  "#7c3aed", // violet
  "#2563eb", // blue
  "#db2777", // pink
  "#0891b2", // cyan
  "#d97706", // amber
  "#059669", // emerald
  "#e11d48", // rose
];

const PARTICLE_COUNT = 50;

export function AntiGravityBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const initRef = useRef(false);

  const initParticles = useCallback((w: number, h: number) => {
    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 4 + 1.5,
        speedY: -(Math.random() * 0.35 + 0.08), // UPWARD
        speedX: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.4 + 0.1,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        shape: (["circle", "square", "diamond"] as const)[Math.floor(Math.random() * 3)],
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const w = window.innerWidth;
      const h = document.documentElement.scrollHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      if (!initRef.current) {
        initParticles(w, h);
        initRef.current = true;
      }
    };

    resize();
    const ro = new ResizeObserver(() => resize());
    ro.observe(document.body);

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const loop = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      if (!prefersReduced) {
        particlesRef.current.forEach((p) => {
          p.y += p.speedY;
          p.x += p.speedX;
          p.rotation += p.rotSpeed;

          // Wrap around
          if (p.y < -20) { p.y = h + 20; p.x = Math.random() * w; }
          if (p.x < -20) p.x = w + 20;
          if (p.x > w + 20) p.x = -20;

          ctx.save();
          ctx.globalAlpha = p.opacity;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.fillStyle = p.color;

          if (p.shape === "circle") {
            ctx.beginPath();
            ctx.arc(0, 0, p.size, 0, Math.PI * 2);
            ctx.fill();
          } else if (p.shape === "square") {
            ctx.fillRect(-p.size, -p.size, p.size * 2, p.size * 2);
          } else {
            // Diamond
            ctx.beginPath();
            ctx.moveTo(0, -p.size * 1.3);
            ctx.lineTo(p.size, 0);
            ctx.lineTo(0, p.size * 1.3);
            ctx.lineTo(-p.size, 0);
            ctx.closePath();
            ctx.fill();
          }
          ctx.restore();
        });
      }

      ctx.restore();
      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(animRef.current); ro.disconnect(); };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ position: "fixed", top: 0, left: 0 }}
    />
  );
}
