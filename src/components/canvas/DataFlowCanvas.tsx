import { useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";

/**
 * Animated data-flow canvas replacing the static architecture diagram.
 * Shows four layers (Workspace → Think → Memory → Engine) with particles
 * flowing between them and ingestion streams entering from the left.
 */

const LAYERS = [
  { label: "Workspace", sub: "What you see", color: "#0EA775", y: 0.12 },
  { label: "Think Engine", sub: "AI intelligence", color: "#06b6d4", y: 0.36 },
  { label: "Business Memory", sub: "Unified data", color: "#8b5cf6", y: 0.60 },
  { label: "The Engine", sub: "200+ connectors", color: "#22c55e", y: 0.84 },
];

const INGESTION = [
  { label: "CRM / ERP", color: "#0EA775" },
  { label: "Emails & Docs", color: "#8b5cf6" },
  { label: "AI Memory", color: "#06b6d4" },
];

interface Particle {
  x: number;
  y: number;
  targetY: number;
  speed: number;
  color: string;
  size: number;
  phase: number;
}

export function DataFlowCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const animRef = useRef(0);

  useEffect(() => {
    if (!isInView) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);

    const W = rect.width;
    const H = rect.height;

    const particles: Particle[] = [];
    const layerHeight = 44;
    const layerMargin = 60;

    function spawnParticle() {
      const src = INGESTION[Math.floor(Math.random() * INGESTION.length)];
      const targetLayer = LAYERS[Math.floor(Math.random() * LAYERS.length)];
      particles.push({
        x: Math.random() * W * 0.15,
        y: H * 0.84 + (Math.random() - 0.5) * 30,
        targetY: H * targetLayer.y,
        speed: 0.8 + Math.random() * 1.2,
        color: src.color,
        size: 2 + Math.random() * 2,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let frame = 0;

    function draw() {
      if (!ctx) return;
      frame++;
      ctx.clearRect(0, 0, W, H);

      if (frame % 6 === 0 && particles.length < 80) spawnParticle();

      // Draw layer bands
      for (const layer of LAYERS) {
        const ly = H * layer.y;
        const grad = ctx.createLinearGradient(0, ly - layerHeight / 2, 0, ly + layerHeight / 2);
        grad.addColorStop(0, `${layer.color}08`);
        grad.addColorStop(0.5, `${layer.color}12`);
        grad.addColorStop(1, `${layer.color}08`);
        ctx.fillStyle = grad;
        ctx.fillRect(layerMargin, ly - layerHeight / 2, W - layerMargin * 2, layerHeight);

        ctx.strokeStyle = `${layer.color}25`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.strokeRect(layerMargin, ly - layerHeight / 2, W - layerMargin * 2, layerHeight);
        ctx.setLineDash([]);

        // Layer label
        ctx.font = "600 12px Inter, system-ui, sans-serif";
        ctx.fillStyle = layer.color;
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText(layer.label, layerMargin + 12, ly - 4);

        ctx.font = "400 10px Inter, system-ui, sans-serif";
        ctx.fillStyle = `${layer.color}99`;
        ctx.fillText(layer.sub, layerMargin + 12, ly + 10);
      }

      // Draw vertical connector lines between layers
      for (let i = 0; i < LAYERS.length - 1; i++) {
        const fromY = H * LAYERS[i].y + layerHeight / 2;
        const toY = H * LAYERS[i + 1].y - layerHeight / 2;
        const cx = W / 2;

        ctx.beginPath();
        ctx.moveTo(cx, fromY);
        ctx.lineTo(cx, toY);
        ctx.strokeStyle = "rgba(0,0,0,0.06)";
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 5]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Small arrow
        const arrowY = (fromY + toY) / 2;
        ctx.beginPath();
        ctx.moveTo(cx - 4, arrowY - 4);
        ctx.lineTo(cx, arrowY);
        ctx.lineTo(cx + 4, arrowY - 4);
        ctx.strokeStyle = "rgba(0,0,0,0.15)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        const dx = W / 2 - p.x;
        const dy = p.targetY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 5) {
          particles.splice(i, 1);
          continue;
        }

        p.x += (dx / dist) * p.speed * 1.5 + Math.sin(frame * 0.03 + p.phase) * 0.3;
        p.y += (dy / dist) * p.speed * 1.5;

        const alpha = Math.min(1, dist / 40);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round(alpha * 180).toString(16).padStart(2, "0");
        ctx.fill();

        // Trail
        const trailGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        trailGrad.addColorStop(0, p.color + "20");
        trailGrad.addColorStop(1, p.color + "00");
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = trailGrad;
        ctx.fill();
      }

      // Ingestion labels (bottom left)
      for (let i = 0; i < INGESTION.length; i++) {
        const src = INGESTION[i];
        const sx = 10;
        const sy = H * 0.84 - 30 + i * 18;
        ctx.font = "500 9px Inter, system-ui, sans-serif";
        ctx.fillStyle = src.color;
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";

        ctx.beginPath();
        ctx.arc(sx + 4, sy, 3, 0, Math.PI * 2);
        ctx.fillStyle = src.color;
        ctx.fill();

        ctx.fillText(src.label, sx + 12, sy);
      }

      animRef.current = requestAnimationFrame(draw);
    }

    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, [isInView]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx2 = canvas.getContext("2d");
      if (ctx2) ctx2.scale(dpr, dpr);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={containerRef} className={className}>
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <canvas
          ref={canvasRef}
          className="w-full rounded-2xl"
          style={{ height: "min(400px, 50vw)", background: "rgba(250,250,250,0.5)" }}
        />
      </motion.div>
    </div>
  );
}
