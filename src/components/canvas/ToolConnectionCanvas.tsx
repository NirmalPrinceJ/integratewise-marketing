import { useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";

/**
 * Interactive connection graph for SolutionReveal.
 * Central IntegrateWise hub with tool nodes orbiting around it,
 * animated data flow lines connecting each tool to the hub.
 */

const TOOL_NODES = [
  { label: "Salesforce", angle: 0 },
  { label: "Tally", angle: 51 },
  { label: "WhatsApp", angle: 102 },
  { label: "Slack", angle: 153 },
  { label: "Shopify", angle: 204 },
  { label: "Jira", angle: 255 },
  { label: "200+", angle: 306 },
];

const COLORS = ["#0EA775", "#06b6d4", "#8b5cf6", "#f59e0b", "#ec4899", "#22c55e", "#64748b"];

interface DataDot {
  fromAngle: number;
  t: number;
  speed: number;
  color: string;
  size: number;
  inward: boolean;
}

export function ToolConnectionCanvas({ className }: { className?: string }) {
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
    const cx = W / 2;
    const cy = H / 2;
    const orbitR = Math.min(W, H) * 0.34;
    const hubR = Math.min(W, H) * 0.08;
    const nodeR = Math.min(W, H) * 0.045;

    const dataDots: DataDot[] = [];
    let frame = 0;

    function getNodePos(angleDeg: number) {
      const rad = (angleDeg * Math.PI) / 180 - Math.PI / 2;
      return { x: cx + orbitR * Math.cos(rad), y: cy + orbitR * Math.sin(rad) };
    }

    function draw() {
      if (!ctx) return;
      frame++;
      ctx.clearRect(0, 0, W, H);

      // Spawn data dots
      if (frame % 15 === 0) {
        const idx = Math.floor(Math.random() * TOOL_NODES.length);
        dataDots.push({
          fromAngle: TOOL_NODES[idx].angle,
          t: 0,
          speed: 0.008 + Math.random() * 0.012,
          color: COLORS[idx],
          size: 2 + Math.random() * 2,
          inward: Math.random() > 0.3,
        });
      }

      // Draw orbit circle
      ctx.beginPath();
      ctx.arc(cx, cy, orbitR, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(0,0,0,0.04)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw connection lines from each node to center
      for (let i = 0; i < TOOL_NODES.length; i++) {
        const pos = getNodePos(TOOL_NODES[i].angle);
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
        ctx.lineTo(cx, cy);
        ctx.strokeStyle = COLORS[i] + "18";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw central hub
      const hubGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, hubR + 12);
      hubGlow.addColorStop(0, "#0EA77520");
      hubGlow.addColorStop(1, "#0EA77500");
      ctx.beginPath();
      ctx.arc(cx, cy, hubR + 12, 0, Math.PI * 2);
      ctx.fillStyle = hubGlow;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cx, cy, hubR, 0, Math.PI * 2);
      ctx.fillStyle = "#0a0a0a";
      ctx.fill();

      // Hub label
      ctx.font = "700 10px Inter, system-ui, sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("Integrate", cx, cy - 5);
      ctx.fillText("Wise", cx, cy + 7);

      // Draw tool nodes
      for (let i = 0; i < TOOL_NODES.length; i++) {
        const node = TOOL_NODES[i];
        const pos = getNodePos(node.angle);

        // Pulsing glow
        const pulse = Math.sin(frame * 0.03 + i) * 0.3 + 0.5;
        const nodeGlow = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, nodeR + 8);
        nodeGlow.addColorStop(0, COLORS[i] + Math.round(pulse * 30).toString(16).padStart(2, "0"));
        nodeGlow.addColorStop(1, COLORS[i] + "00");
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, nodeR + 8, 0, Math.PI * 2);
        ctx.fillStyle = nodeGlow;
        ctx.fill();

        // Node circle
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, nodeR, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.strokeStyle = COLORS[i] + "60";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Label inside
        ctx.font = `600 ${nodeR > 20 ? 9 : 7}px Inter, system-ui, sans-serif`;
        ctx.fillStyle = "#0a0a0a";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(node.label, pos.x, pos.y);
      }

      // Animate data dots
      for (let i = dataDots.length - 1; i >= 0; i--) {
        const d = dataDots[i];
        d.t += d.speed;

        if (d.t > 1) {
          dataDots.splice(i, 1);
          continue;
        }

        const pos = getNodePos(d.fromAngle);
        const t = d.inward ? d.t : 1 - d.t;
        const dotX = pos.x + (cx - pos.x) * t;
        const dotY = pos.y + (cy - pos.y) * t;

        ctx.beginPath();
        ctx.arc(dotX, dotY, d.size, 0, Math.PI * 2);
        ctx.fillStyle = d.color;
        ctx.fill();

        // Trail glow
        const tGlow = ctx.createRadialGradient(dotX, dotY, 0, dotX, dotY, d.size * 3);
        tGlow.addColorStop(0, d.color + "30");
        tGlow.addColorStop(1, d.color + "00");
        ctx.beginPath();
        ctx.arc(dotX, dotY, d.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = tGlow;
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
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <canvas
          ref={canvasRef}
          className="w-full rounded-2xl"
          style={{ height: "min(360px, 50vw)" }}
        />
      </motion.div>
    </div>
  );
}
