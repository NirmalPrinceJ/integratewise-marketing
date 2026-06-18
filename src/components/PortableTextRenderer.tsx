/**
 * Portable Text Renderer
 *
 * Renders Sanity Portable Text blocks as React components.
 * Portable Text is Sanity's structured rich text format.
 * It supports headings, paragraphs, lists, links, and custom blocks.
 *
 * When content comes from local fallback data (plain strings),
 * it renders them as simple paragraphs.
 */
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="editorial-heading text-2xl text-iw-ink mt-10 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="font-iw-display text-lg tracking-wide text-iw-ink mt-8 mb-3">{children}</h3>,
    normal: ({ children }) => <p className="font-iw-sans text-base text-iw-slate leading-relaxed mb-4">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-iw-gold pl-6 py-2 my-8">
        <p className="editorial-serif text-lg text-iw-ink italic leading-relaxed">{children}</p>
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-iw-ink">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-iw-forest underline underline-offset-2 hover:text-iw-gold transition-colors">
        {children}
      </a>
    ),
    code: ({ children }) => <code className="bg-iw-paper-warm px-1.5 py-0.5 rounded font-iw-mono text-xs">{children}</code>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside space-y-2 mb-4 font-iw-sans text-base text-iw-slate">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside space-y-2 mb-4 font-iw-sans text-base text-iw-slate">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
};

interface Props {
  value: unknown;
}

export default function PortableTextRenderer({ value }: Props) {
  // Handle local fallback data (plain strings)
  if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'string') {
    return (
      <>
        {(value as string[]).map((paragraph, i) => {
          if (paragraph.startsWith('## ')) {
            return <h2 key={i} className="editorial-heading text-2xl text-iw-ink mt-10 mb-4">{paragraph.replace('## ', '')}</h2>;
          }
          const boldMatch = paragraph.match(/\*\*(.*?)\*\*/);
          if (boldMatch) {
            const before = paragraph.slice(0, boldMatch.index);
            const after = paragraph.slice((boldMatch.index || 0) + boldMatch[0].length);
            return (
              <p key={i} className="font-iw-sans text-base text-iw-slate leading-relaxed mb-4">
                {before}<strong className="text-iw-ink">{boldMatch[1]}</strong>{after}
              </p>
            );
          }
          return <p key={i} className="font-iw-sans text-base text-iw-slate leading-relaxed mb-4">{paragraph}</p>;
        })}
      </>
    );
  }

  // Handle Sanity Portable Text
  if (Array.isArray(value)) {
    return <PortableText value={value as PortableTextBlock[]} components={components} />;
  }

  return null;
}
