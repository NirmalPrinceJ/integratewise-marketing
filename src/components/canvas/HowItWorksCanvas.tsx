import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";

/**
 * Animated 3-step flow canvas: Connect → Understand → Assist
 * Data particles flow left-to-right through three stages with
 * tool icons entering from the left, a central brain hub, and
 * actionable output on the right.
 */

const STEPS = [
  { label: "Connect", sub: "Link your tools", color: "#0EA775", x: 0.18 },
  { label: "Understand", sub: "AI builds the picture", color: "#06b6d4", x: 0.50 },
  { label: "Assist", sub: "Smart suggestions", color: "#8b5cf6", x: 0.82 },
];

const TOOLS = ["Salesforce", "Tally", "Slack", "WhatsApp", "Jira", "Shopify"];

interface FlowParticle {
  x: number;
  y: number;
  stage: number;
  speed: number;
  color: string;
  size: number;
}

export function HowItWorksCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const animRef = useRef(0);
  const [activeStep, setActiveStep] = useState(0);

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
    const cy = H * 0.5;
    const nodeR = Math.min(36, W * 0.05);
    const particles: FlowParticle[] = [];
    let frame = 0;

    function getStepX(i: number) { return W * STEPS[i].x; }

    function spawnParticle() {
      const step = STEPS[0];
      particles.push({
        x: 0,
        y: cy + (Math.random() - 0.5) * 40,
        stage: 0,
        speed: 1 + Math.random() * 1.5,
        color: step.color,
        size: 2 + Math.random() * 2,
      });
    }

    function draw() {
      if (!ctx) return;
      frame++;
      ctx.clearRect(0, 0, W, H);

      if (frame % 10 === 0 && particles.length < 40) spawnParticle();

      // Cycle active step
      const cycleStep = Math.floor((frame / 90) % 3);
      setActiveStep(cycleStep);

      // Draw connection lines between steps
      for (let i = 0; i < STEPS.length - 1; i++) {
        const fromX = getStepX(i) + nodeR + 8;
        const toX = getStepX(i + 1) - nodeR - 8;
        ctx.beginPath();
        ctx.moveTo(fromX, cy);
        ctx.lineTo(toX, cy);
        ctx.strokeStyle = "rgba(0,0,0,0.08)";
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 6]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Arrow
        const midX = (fromX + toX) / 2;
        ctx.beginPath();
        ctx.moveTo(midX - 5, cy - 5);
        ctx.lineTo(midX + 2, cy);
        ctx.lineTo(midX - 5, cy + 5);
        ctx.strokeStyle = "rgba(0,0,0,0.2)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Draw step nodes
      for (let i = 0; i < STEPS.length; i++) {
        const step = STEPS[i];
        const sx = getStepX(i);
        const isActive = cycleStep === i;
        const r = isActive ? nodeR + 4 : nodeR;

        // Glow ring for active
        if (isActive) {
          const pulse = Math.sin(frame * 0.06) * 0.3 + 0.5;
          const glow = ctx.createRadialGradient(sx, cy, r, sx, cy, r + 16);
          glow.addColorStop(0, step.color + Math.round(pulse * 40).toString(16).padStart(2, "0"));
          glow.addColorStop(1, step.color + "00");
          ctx.beginPath();
          ctx.arc(sx, cy, r + 16, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        // Circle
        ctx.beginPath();
        ctx.arc(sx, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = isActive ? step.color : "#fafafa";
        ctx.fill();
        ctx.strokeStyle = isActive ? step.color : "rgba(0,0,0,0.1)";
        ctx.lineWidth = isActive ? 2 : 1;
        ctx.stroke();

        // Step number
        ctx.font = `700 ${isActive ? 16 : 14}px Inter, system-ui, sans-serif`;
        ctx.fillStyle = isActive ? "#ffffff" : "#71717a";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(`${i + 1}`, sx, cy);

        // Label below
        ctx.font = "600 12px Inter, system-ui, sans-serif";
        ctx.fillStyle = isActive ? step.color : "#0a0a0a";
        ctx.fillText(step.label, sx, cy + r + 20);

        ctx.font = "400 10px Inter, system-ui, sans-serif";
        ctx.fillStyle = "#71717a";
        ctx.fillText(step.sub, sx, cy + r + 36);
      }

      // Draw tool labels entering from left
      for (let i = 0; i < TOOLS.length; i++) {
        const ty = cy - 60 + i * 22;
        const tx = 8;
        ctx.font = "500 9px Inter, system-ui, sans-serif";
        ctx.fillStyle = "#a1a1aa";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText(TOOLS[i], tx, ty);

        // Small dot
        const dotX = tx + ctx.measureText(TOOLS[i]).width + 8;
        ctx.beginPath();
        ctx.arc(dotX, ty, 2, 0, Math.PI * 2);
        ctx.fillStyle = STEPS[0].color + "60";
        ctx.fill();
      }

      // Update particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        const targetX = p.stage < STEPS.length ? getStepX(p.stage) : W + 20;
        const dx = targetX - p.x;
        const dy = cy - p.y;

        p.x += Math.sign(dx) * p.speed * 2;
        p.y += dy * 0.05;

        if (Math.abs(dx) < nodeR && p.stage < STEPS.length) {
          p.stage++;
          p.color = p.stage < STEPS.length ? STEPS[p.stage].color : "#8b5cf6";
        }

        if (p.x > W + 20) {
          particles.splice(i, 1);
          continue;
        }

        const alpha = Math.min(1, Math.abs(dx) / 50);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round(alpha * 200).toString(16).padStart(2, "0");
        ctx.fill();
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
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <canvas
          ref={canvasRef}
          className="w-full rounded-2xl"
          style={{ height: "min(280px, 40vw)", background: "rgba(250,250,250,0.3)" }}
        />
        <motion.div
          key={activeStep}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm border rounded-xl px-4 py-2 shadow-lg text-center"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <p className="text-[10px] text-muted-foreground">
            Step {activeStep + 1}: {STEPS[activeStep].label}
          </p>
          <p className="text-xs font-medium mt-0.5">{STEPS[activeStep].sub}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
