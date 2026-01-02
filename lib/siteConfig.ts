/**
 * IntegrateWise Brand Configuration
 * Centralized brand strings and metadata
 *
 * SSOT v2 design system colors (locked):
 * - Dark Blue: #0A1833
 * - Indigo: #3F51B5
 * - Gold: #D4AF37
 * - Pastel Green: #8BC4B8
 * - Teal: #44A069
 * - Red: #E63946
 * - Silver: #C0C0C0
 * - Light: #F3F4F6
 * - White: #FFFFFF
 */

export const siteConfig = {
  name: "IntegrateWise",
  shortName: "IntegrateWise",
  tagline: "The Automation Infrastructure for Modern Work",
  description:
    "IntegrateWise is the Universal AI OS: persona-aware views, BYOM + BYOT, and a shared Spine that turns scattered work into structured output—securely and at scale.",
  longDescription:
    "IntegrateWise is the Universal AI OS for modern work. A shared Spine preserves meaning, persona-aware views adapt to you, and BYOM + BYOT let you choose models and templates. Start with AI Insights, then expand into Loader, Templates, and Agents.",
  
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
  
  // SEO
  keywords: [
    "IntegrateWise",
    "Universal AI OS",
    "automation infrastructure",
    "persona-aware views",
    "AI Insights",
    "pattern recognition",
    "BYOM",
    "BYOT",
    "AI Loader",
    "templates",
    "AI agents",
    "Render universal",
  ],
} as const

export type SiteConfig = typeof siteConfig
