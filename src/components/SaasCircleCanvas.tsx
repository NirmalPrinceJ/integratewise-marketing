import { useEffect, useRef } from 'react';

interface AppIcon {
  x: number;
  y: number;
  size: number;
  rotation: number;
  label: string;
  src: string;
  img: HTMLImageElement | null;
}

const LOGOS = [
  { label: 'Salesforce', src: 'https://cdn.simpleicons.org/salesforce/1A3A2A' },
  { label: 'Slack', src: 'https://cdn.simpleicons.org/slack/1A3A2A' },
  { label: 'Notion', src: 'https://cdn.simpleicons.org/notion/1A3A2A' },
  { label: 'HubSpot', src: 'https://cdn.simpleicons.org/hubspot/1A3A2A' },
  { label: 'Google Drive', src: 'https://cdn.simpleicons.org/googledrive/1A3A2A' },
  { label: 'Gmail', src: 'https://cdn.simpleicons.org/gmail/1A3A2A' },
  { label: 'ChatGPT', src: 'https://cdn.simpleicons.org/openai/1A3A2A' },
  { label: 'Asana', src: 'https://cdn.simpleicons.org/asana/1A3A2A' },
  { label: 'GitHub', src: 'https://cdn.simpleicons.org/github/1A3A2A' },
  { label: 'Jira', src: 'https://cdn.simpleicons.org/jira/1A3A2A' },
  { label: 'Airtable', src: 'https://cdn.simpleicons.org/airtable/1A3A2A' },
  { label: 'Stripe', src: 'https://cdn.simpleicons.org/stripe/1A3A2A' },
];

export default function SaasCircleCanvas({ dark = false }: { dark?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appsRef = useRef<AppIcon[]>([]);
  const timeRef = useRef(0);
  const rafRef = useRef<number>(0);

  const strokeColor = dark ? '#E8E0D0' : '#1A3A2A';
  const ringAlpha = dark ? 0.18 : 0.12;
  const connAlpha = dark ? 0.18 : 0.12;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      initApps(rect.width, rect.height);
    };

    const initApps = (w: number, h: number) => {
      const cx = w / 2;
      const cy = h / 2;
      const count = LOGOS.length;
      const radius = Math.min(w, h) * 0.33;
      appsRef.current = LOGOS.map((logo, i) => {
        const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = logo.src;
        return {
          x: cx + Math.cos(angle) * radius,
          y: cy + Math.sin(angle) * radius,
          size: Math.min(w, h) * 0.09,
          rotation: angle,
          label: logo.label,
          src: logo.src,
          img,
        };
      });
    };

    resize();

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const cx = w / 2;
      const cy = h / 2;
      ctx.clearRect(0, 0, w, h);
      timeRef.current += 0.003;
      const t = timeRef.current;

      // Center SPINE hub
      const hubR = Math.min(w, h) * 0.06;
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, hubR, 0, Math.PI * 2);
      ctx.fillStyle = dark ? 'rgba(232,224,208,0.10)' : 'rgba(26,58,42,0.08)';
      ctx.fill();
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = 0.7;
      ctx.stroke();
      ctx.font = `500 ${Math.min(w, h) * 0.016}px 'IBM Plex Mono', monospace`;
      ctx.fillStyle = strokeColor;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.globalAlpha = 0.9;
      ctx.fillText('SPINE', cx, cy);
      ctx.restore();

      // Orbit ring
      const orbitR = Math.min(w, h) * 0.33;
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, orbitR, 0, Math.PI * 2);
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 6]);
      ctx.globalAlpha = ringAlpha;
      ctx.stroke();
      ctx.restore();

      // Inner animated orbit
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, orbitR * 0.55, t * 0.5, t * 0.5 + Math.PI * 1.8);
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1;
      ctx.globalAlpha = ringAlpha * 0.5;
      ctx.stroke();
      ctx.restore();

      // Hub-to-app connections with animated dash
      for (const app of appsRef.current) {
        const pulseAlpha = connAlpha + Math.sin(t * 3 + app.rotation * 2) * 0.08;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(app.x, app.y);
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 1;
        ctx.globalAlpha = pulseAlpha;
        ctx.setLineDash([3, 5]);
        ctx.lineDashOffset = -t * 20;
        ctx.stroke();
        ctx.restore();
      }

      // Adjacent app connections
      for (let i = 0; i < appsRef.current.length; i++) {
        const a = appsRef.current[i];
        const b = appsRef.current[(i + 1) % appsRef.current.length];
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 1;
        ctx.globalAlpha = connAlpha * 0.35;
        ctx.stroke();
        ctx.restore();
      }

      // App icons — CDN logos
      for (let i = 0; i < appsRef.current.length; i++) {
        const app = appsRef.current[i];
        const floatX = Math.sin(t * 2 + i * 1.2) * 3;
        const floatY = Math.cos(t * 1.5 + i * 0.8) * 2;
        const drawX = app.x + floatX;
        const drawY = app.y + floatY;
        const d = app.size * 1.15;

        // Circle bg
        ctx.save();
        ctx.beginPath();
        ctx.arc(drawX, drawY, d * 0.55, 0, Math.PI * 2);
        ctx.fillStyle = dark ? 'rgba(232,224,208,0.08)' : 'rgba(244,240,232,0.5)';
        ctx.fill();
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 1.2;
        ctx.globalAlpha = 0.45;
        ctx.stroke();
        ctx.restore();

        // CDN logo
        if (app.img && app.img.complete && app.img.naturalWidth > 0) {
          ctx.save();
          ctx.globalAlpha = 0.8 + Math.sin(t * 2 + i) * 0.1;
          ctx.drawImage(app.img, drawX - d * 0.4, drawY - d * 0.4, d * 0.8, d * 0.8);
          ctx.restore();
        } else {
          // Fallback: first letter
          ctx.save();
          ctx.font = `600 ${d * 0.5}px 'IBM Plex Mono', monospace`;
          ctx.fillStyle = strokeColor;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.globalAlpha = 0.7;
          ctx.fillText(app.label[0], drawX, drawY);
          ctx.restore();
        }

        // Label
        ctx.save();
        ctx.font = `400 ${Math.min(w, h) * 0.013}px 'IBM Plex Mono', monospace`;
        ctx.fillStyle = strokeColor;
        ctx.textAlign = 'center';
        ctx.globalAlpha = 0.5;
        ctx.fillText(app.label, drawX, drawY + d * 0.7);
        ctx.restore();
      }

      // Orbiting dots
      for (let i = 0; i < 6; i++) {
        const angle = t + (i / 6) * Math.PI * 2;
        const dotX = cx + Math.cos(angle) * orbitR;
        const dotY = cy + Math.sin(angle) * orbitR;
        ctx.save();
        ctx.beginPath();
        ctx.arc(dotX, dotY, 2, 0, Math.PI * 2);
        ctx.fillStyle = strokeColor;
        ctx.globalAlpha = 0.2 + Math.sin(t * 4 + i) * 0.15;
        ctx.fill();
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [dark]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ minHeight: '400px' }}
    />
  );
}
