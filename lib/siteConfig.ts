/**
 * IntegrateWise Brand Configuration — SSOT v2
 * Centralized brand strings and metadata
 * 
 * Color tokens (DO NOT CHANGE):
 * --color-primary: #3F51B5 (Indigo)
 * --color-light: #F3F4F6 (Light gray)
 * --color-dark: #1E2A4A (Dark navy)
 * --color-pink: #F54476 (Accent pink)
 * --color-spine: #8BC4B8 (Pastel Green - Spine)
 * 
 * DO NOT USE: #0A1833
 * 
 * SSOT v2 Language Rules:
 * APPROVED: AI Insights, pattern recognition, working style, profile pattern,
 *           persona-aware views, automation infrastructure, universal AI OS,
 *           BYOM + BYOT, Render Only mode
 * AVOID: cosmic, vedic, astrology, numerology, horoscope, life path
 */

export const siteConfig = {
  name: "IntegrateWise",
  shortName: "IntegrateWise",
  tagline: "The Automation Infrastructure for Modern Work",
  description: "Connect your tools through one Spine. Discover your working style with AI Insights. Deploy templates, load structured data, and generate outputs with universal Render.",
  longDescription: "IntegrateWise is the Automation Infrastructure for Modern Work. It connects your tools through one structural layer (Spine), uses AI Insights to understand your working style, and powers persona-aware views, AI Loader, Templates, Agents, and universal Render outputs—without migrations.",
  
  // Universal positioning
  positioning: {
    headline: "The Automation Infrastructure for Modern Work",
    subheadline: "Your tools don't talk to each other. IntegrateWise connects them through one Spine and powers persona-aware views, AI Loader, Templates, AI Agents, and universal Render—so work becomes effortless.",
    microProof: "BYOM + BYOT supported • Render Only mode available • Built for individuals and teams",
  },
  
  // URLs
  url: "https://integratewise.co",
  apiUrl: "https://api.integratewise.co/v1",
  docsUrl: "https://docs.integratewise.co",
  demoUrl: "https://demo.integratewise.co",
  
  // Legal
  company: "IntegrateWise",
  copyright: `© ${new Date().getFullYear()} IntegrateWise. All rights reserved.`,
  
  // Contact
  supportEmail: "support@integratewise.co",
  securityEmail: "security@integratewise.co",
  
  // Social
  social: {
    twitter: "@integratewise",
    github: "integratewise",
  },
  
  // Brand assets
  logo: {
    mark: "/brand/logo-mark.svg",
    full: "/brand/logo.svg",
    dark: "/brand/logo-dark.svg",
    alt: "IntegrateWise logo",
  },
  
  // SEO (SSOT v2 aligned)
  keywords: [
    "IntegrateWise",
    "automation infrastructure",
    "AI Insights",
    "AI agents",
    "workflow automation",
    "universal AI OS",
    "BYOM",
    "BYOT",
    "Notion integration",
    "Slack integration",
    "CRM integration",
    "API platform",
    "Spine",
    "Render",
  ],
  
  // Pricing tiers (SSOT v2)
  pricing: {
    free: { name: "Free", price: "₹0" },
    starter: { name: "Starter", price: "₹999/mo" },
    pro: { name: "Pro", price: "₹4,999/mo" },
    enterprise: { name: "Enterprise", price: "Custom" },
  },
} as const

export type SiteConfig = typeof siteConfig
