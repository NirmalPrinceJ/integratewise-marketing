import React, { useState } from 'react';
import { LayoutTemplate, Eye, Download, Code, Smartphone, Monitor } from 'lucide-react';

export function ProductLandingPages() {
  const [activeTab, setActiveTab] = useState<'all' | 'waitlist' | 'feature' | 'pricing'>('all');
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');

  const templates = [
    {
      id: 'template-1',
      type: 'feature',
      title: 'Adaptive Spine Feature Drop',
      description: 'A high-converting product page focusing on the Adaptive Spine integration capabilities with dynamic scroll effects.',
      thumbnail: 'bg-gradient-to-br from-page-primary to-page-accent',
      tags: ['Interactive', 'Dark Mode', 'Product Showcase']
    },
    {
      id: 'template-2',
      type: 'waitlist',
      title: 'AI Beta Waitlist',
      description: 'Minimal, focused lead-capture page for the upcoming AI Context Engine beta program.',
      thumbnail: 'bg-page-navy-dark',
      tags: ['Lead Gen', 'Minimal', 'High Conversion']
    },
    {
      id: 'template-3',
      type: 'feature',
      title: 'Governance Control Panel',
      description: 'Product landing page detailing enterprise security and human-in-the-loop approval workflows.',
      thumbnail: 'bg-page-surface-grey',
      tags: ['Enterprise', 'Trust & Security']
    },
    {
      id: 'template-4',
      type: 'pricing',
      title: 'Enterprise Pricing Tiers',
      description: 'Clear, compelling pricing page with feature matrices and enterprise contact CTAs.',
      thumbnail: 'bg-white',
      tags: ['SaaS Pricing', 'Comparison']
    }
  ];

  const filtered = activeTab === 'all' ? templates : templates.filter(t => t.type === activeTab);

  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-page-navy-dark">Product Landing Pages</h1>
        <p className="mt-2 text-page-slate-light">
          Ready-to-use marketing landing page templates for IntegrateWise products. Browse designs, preview responsively, and export React/HTML source code.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-page-border-light pb-4">
        {[
          { id: 'all', label: 'All Templates' },
          { id: 'feature', label: 'Feature Deep-Dives' },
          { id: 'waitlist', label: 'Waitlist & Lead Gen' },
          { id: 'pricing', label: 'Pricing Pages' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === tab.id 
                ? 'bg-page-primary text-white shadow-md' 
                : 'bg-page-surface-hover text-page-slate hover:text-page-navy-dark'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Template Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {filtered.map(template => (
          <div key={template.id} className="bg-white rounded-2xl border border-page-border-light overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            {/* Visual Thumbnail or Fake iframe */}
            <div className={`aspect-[16/9] w-full relative ${template.thumbnail} flex flex-col pt-4 px-4`}>
               {/* Browser mock */}
               <div className="flex items-center gap-1.5 mb-2">
                 <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                 <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                 <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
               </div>
               {/* Wireframe lines */}
               <div className="bg-white/10 rounded-t-lg flex-1 border-x border-t border-white/20 p-4">
                 <div className="w-1/3 h-6 rounded bg-white/20 mb-4" />
                 <div className="w-3/4 h-3 rounded bg-white/10 mb-2" />
                 <div className="w-2/3 h-3 rounded bg-white/10" />
                 <div className="mt-8 grid grid-cols-2 gap-4">
                   <div className="h-16 rounded bg-white/10" />
                   <div className="h-16 rounded bg-white/10" />
                 </div>
               </div>

               {/* Overlays */}
               <div className="absolute top-4 right-4 flex gap-2">
                  <span className="px-2 py-1 rounded bg-black/50 text-white text-[10px] uppercase font-bold tracking-wider backdrop-blur-sm">
                    {template.type}
                  </span>
               </div>
            </div>
            
            {/* Details */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-page-navy-dark mb-2">{template.title}</h3>
              <p className="text-sm text-page-slate mb-4 line-clamp-2">{template.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {template.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-page-surface-hover text-page-slate-dark text-[11px] font-medium border border-page-border-light">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 pt-4 border-t border-page-border-light">
                <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-page-primary/10 text-page-primary hover:bg-page-primary hover:text-white transition-colors text-sm font-semibold">
                  <Eye className="w-4 h-4" /> Live Preview
                </button>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg border border-page-border-light text-page-slate hover:text-page-navy-dark hover:bg-page-surface-hover transition-colors" title="Copy React/Tailwind Code">
                    <Code className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg border border-page-border-light text-page-slate hover:text-page-navy-dark hover:bg-page-surface-hover transition-colors" title="Download Source ZIP">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
