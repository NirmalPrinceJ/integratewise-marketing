import { useEffect } from 'react';

export function useDocumentTitle(title: string) {
  useEffect(() => {
    const original = document.title;
    document.title = title;
    return () => {
      document.title = original;
    };
  }, [title]);
}

export function useMetaDescription(description: string) {
  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);
  }, [description]);
}

export function useOgTags({ title, description, url }: { title?: string; description?: string; url?: string }) {
  useEffect(() => {
    const setOg = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="og:${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', `og:${property}`);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };
    const setTw = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="twitter:${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', `twitter:${name}`);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    if (title) {
      setOg('title', title);
      setTw('title', title);
    }
    if (description) {
      setOg('description', description);
      setTw('description', description);
    }
    if (url) {
      setOg('url', url);
      setTw('url', url);
    }
  }, [title, description, url]);
}

export function useSeo(title: string, description: string, og?: { title?: string; description?: string; url?: string }) {
  useDocumentTitle(title);
  useMetaDescription(description);
  if (og) useOgTags(og);
}
