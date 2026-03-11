import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";

/**
 * Governed Execution Flow canvas for Security page.
 * Shows: Intelligence → Human Approval Gate → Execute → Evidence
 * with a traveling token that pauses at the approval gate.
 */

const STAGES = [
  { label: "Intelligence", sub: "AI identifies action", color: "#06b6d4", x: 0.10 },
  { label: "Prepare", sub: "Evidence gathered", color: "#8b5cf6", x: 0.30 },
  { label: "Human Review", sub: "You approve or reject", color: "#f59e0b", x: 0.50 },
  { label: "Execute", sub: "Action runs safely", color: "#22c55e", x: 0.70 },
  { label: "Audit Trail", sub: "Everything logged", color: "#0EA775", x: 0.90 },
];

export function GovernedFlowCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const animRef = useRef(0);
  const [activeStage, setActiveStage] = useState(0);

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
    const cy = H * 0.45;
    const nodeW = Math.min(90, W * 0.14);
    const nodeH = 50;

    let frame = 0;
    const cycleDuration = 180;

    function drawRoundedRect(x: number, y: number, w: number, h: number, r: number) {
      if (!ctx) return;
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    }

    function draw() {
      if (!ctx) return;
      frame++;
      ctx.clearRect(0, 0, W, H);

      const progress = (frame % cycleDuration) / cycleDuration;
      const currentStage = Math.min(STAGES.length - 1, Math.floor(progress * STAGES.length));
      const stageProgress = (progress * STAGES.length) % 1;
      setActiveStage(currentStage);

      // Draw connection line
      const firstX = W * STAGES[0].x;
      const lastX = W * STAGES[STAGES.length - 1].x;
      ctx.beginPath();
      ctx.moveTo(firstX, cy);
      ctx.lineTo(lastX, cy);
      ctx.strokeStyle = "rgba(0,0,0,0.06)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Progress line
      const progressX = firstX + (lastX - firstX) * progress;
      ctx.beginPath();
      ctx.moveTo(firstX, cy);
      ctx.lineTo(progressX, cy);
      ctx.strokeStyle = STAGES[currentStage].color + "40";
      ctx.lineWidth = 3;
      ctx.stroke();

      // Draw stages
      for (let i = 0; i < STAGES.length; i++) {
        const stage = STAGES[i];
        const sx = W * stage.x;
        const isActive = i === currentStage;
        const isPast = i < currentStage;
        const w = isActive ? nodeW + 8 : nodeW;
        const h = isActive ? nodeH + 6 : nodeH;

        // Shield icon for Human Review
        if (i === 2) {
          const shieldGlow = ctx.createRadialGradient(sx, cy, 0, sx, cy, w);
          shieldGlow.addColorStop(0, "#f59e0b10");
          shieldGlow.addColorStop(1, "#f59e0b00");
          ctx.beginPath();
          ctx.arc(sx, cy, w, 0, Math.PI * 2);
          ctx.fillStyle = shieldGlow;
          ctx.fill();
        }

        // Node
        drawRoundedRect(sx - w / 2, cy - h / 2, w, h, 10);
        if (isActive) {
          ctx.fillStyle = stage.color;
          ctx.fill();
          ctx.strokeStyle = stage.color;
        } else if (isPast) {
          ctx.fillStyle = "#f4f4f5";
          ctx.fill();
          ctx.strokeStyle = stage.color + "40";
        } else {
          ctx.fillStyle = "#fafafa";
          ctx.fill();
          ctx.strokeStyle = "rgba(0,0,0,0.08)";
        }
        ctx.lineWidth = isActive ? 2 : 1;
        ctx.stroke();

        // Stage icon (number)
        ctx.font = `700 ${isActive ? 14 : 12}px Inter, system-ui, sans-serif`;
        ctx.fillStyle = isActive ? "#ffffff" : isPast ? stage.color : "#a1a1aa";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(`${i + 1}`, sx, cy - 6);

        // Label
        ctx.font = `600 ${isActive ? 10 : 9}px Inter, system-ui, sans-serif`;
        ctx.fillStyle = isActive ? "#ffffff" : "#0a0a0a";
        ctx.fillText(stage.label, sx, cy + 10);

        // Sub label below node
        ctx.font = "400 9px Inter, system-ui, sans-serif";
        ctx.fillStyle = isActive ? stage.color : "#a1a1aa";
        ctx.textBaseline = "top";
        ctx.fillText(stage.sub, sx, cy + h / 2 + 8);
        ctx.textBaseline = "middle";

        // Arrow to next
        if (i < STAGES.length - 1) {
          const nextX = W * STAGES[i + 1].x;
          const arrowX = (sx + w / 2 + nextX - nodeW / 2) / 2;
          ctx.beginPath();
          ctx.moveTo(arrowX - 4, cy - 4);
          ctx.lineTo(arrowX + 2, cy);
          ctx.lineTo(arrowX - 4, cy + 4);
          ctx.strokeStyle = isPast || isActive ? stage.color + "60" : "rgba(0,0,0,0.12)";
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }

      // Traveling token
      const tokenX = firstX + (lastX - firstX) * progress;
      const tokenColor = STAGES[currentStage].color;

      // Token glow
      const tGlow = ctx.createRadialGradient(tokenX, cy, 0, tokenX, cy, 14);
      tGlow.addColorStop(0, tokenColor + "40");
      tGlow.addColorStop(1, tokenColor + "00");
      ctx.beginPath();
      ctx.arc(tokenX, cy, 14, 0, Math.PI * 2);
      ctx.fillStyle = tGlow;
      ctx.fill();

      // Token dot
      ctx.beginPath();
      ctx.arc(tokenX, cy, 4, 0, Math.PI * 2);
      ctx.fillStyle = tokenColor;
      ctx.fill();

      // "HUMAN GATE" label above stage 3
      const gateX = W * STAGES[2].x;
      ctx.font = "700 8px Inter, system-ui, sans-serif";
      ctx.fillStyle = "#f59e0b";
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";
      ctx.fillText("APPROVAL GATE", gateX, cy - nodeH / 2 - 14);

      // Shield outline
      const shieldY = cy - nodeH / 2 - 28;
      ctx.beginPath();
      ctx.moveTo(gateX, shieldY - 8);
      ctx.lineTo(gateX + 7, shieldY - 4);
      ctx.lineTo(gateX + 7, shieldY + 3);
      ctx.quadraticCurveTo(gateX, shieldY + 8, gateX, shieldY + 8);
      ctx.quadraticCurveTo(gateX, shieldY + 8, gateX - 7, shieldY + 3);
      ctx.lineTo(gateX - 7, shieldY - 4);
      ctx.closePath();
      ctx.strokeStyle = "#f59e0b";
      ctx.lineWidth = 1.5;
      ctx.stroke();

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
          style={{ height: "min(240px, 35vw)", background: "rgba(250,250,250,0.5)" }}
        />
        <motion.div
          key={activeStage}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm border rounded-xl px-4 py-2 shadow-lg text-center"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <p className="text-[10px] text-muted-foreground font-medium">
            {STAGES[activeStage].label}
          </p>
          <p className="text-xs mt-0.5">{STAGES[activeStage].sub}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
