// Content rendering utilities
// Converts Sanity content blocks to HTML

export const contentUtils = {
  // Convert Sanity portable text to HTML
  renderPortableText(blocks) {
    if (!blocks || !Array.isArray(blocks)) return '';
    
    return blocks
      .map((block) => {
        if (block._type === 'block') {
          const style = block.style || 'normal';
          const text = block.children
            .map((child) => {
              let content = child.text;
              if (child.marks && child.marks.length) {
                child.marks.forEach((mark) => {
                  if (mark === 'strong') content = `<strong>${content}</strong>`;
                  if (mark === 'em') content = `<em>${content}</em>`;
                  if (mark === 'code') content = `<code>${content}</code>`;
                });
              }
              return content;
            })
            .join('');
          
          switch (style) {
            case 'h1':
              return `<h1>${text}</h1>`;
            case 'h2':
              return `<h2>${text}</h2>`;
            case 'h3':
              return `<h3>${text}</h3>`;
            case 'blockquote':
              return `<blockquote>${text}</blockquote>`;
            default:
              return `<p>${text}</p>`;
          }
        }
        
        if (block._type === 'image') {
          return `<img src="${block.asset.url}" alt="${block.alt || ''}" style="max-width: 100%; height: auto; margin: 20px 0;" />`;
        }
        
        return '';
      })
      .join('');
  },
  
  // Format date
  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  },
};

export default contentUtils;
