export default function WaveDivider({ variant = 'light-to-forest' }: { variant?: 'light-to-forest' | 'forest-to-light' | 'light-to-warm' | 'warm-to-light' }) {
  const paths: Record<string, { bg: string; path: string }> = {
    'light-to-forest': {
      bg: '#F5F0E8',
      path: '#1A3A2A',
    },
    'forest-to-light': {
      bg: '#1A3A2A',
      path: '#F5F0E8',
    },
    'light-to-warm': {
      bg: '#F5F0E8',
      path: '#EDEADF',
    },
    'warm-to-light': {
      bg: '#EDEADF',
      path: '#F5F0E8',
    },
  };
  const p = paths[variant];
  return (
    <div className="w-full overflow-hidden leading-none" style={{ background: p.bg }}>
      <svg viewBox="0 0 1440 30" className="w-full h-auto block" preserveAspectRatio="none" style={{ display: 'block' }}>
        <path d="M0,15 C240,30 480,0 720,15 C960,30 1200,0 1440,15 L1440,30 L0,30 Z" fill={p.path} />
      </svg>
    </div>
  );
}
