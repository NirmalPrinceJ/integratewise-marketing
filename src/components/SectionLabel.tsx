interface SectionLabelProps {
  label: string;
  dark?: boolean;
}

export default function SectionLabel({ label, dark = false }: SectionLabelProps) {
  return (
    <span
      className={`inline-block font-iw-mono text-xs uppercase tracking-widest px-3 py-1.5 rounded border ${
        dark
          ? 'text-iw-gold-pale border-iw-gold/40'
          : 'text-iw-forest border-iw-rule'
      }`}
    >
      {label}
    </span>
  );
}
