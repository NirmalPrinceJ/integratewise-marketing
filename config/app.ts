/**
 * IntegrateWise Application Configuration
 * Single source of truth for domains, routes, and app settings
 */

export const appConfig = {
  // Domain configuration
  domains: {
    base: "integratewise.co",
    app: "os.integratewise.online",
    marketing: "www.integratewise.co",
    docs: "docs.integratewise.co",
  },

  // Full URLs
  urls: {
    app: "https://os.integratewise.online",
    marketing: "https://www.integratewise.co",
    docs: "https://docs.integratewise.co",
  },

  // App routes (derived from app subdomain)
  routes: {
    signup: "https://os.integratewise.online/signup",
    login: "https://os.integratewise.online/login",
    demo: "https://os.integratewise.online/demo",
    dashboard: "https://os.integratewise.online/dashboard",
    connectBrain: "https://os.integratewise.online/connect/brain",
    integrations: "https://os.integratewise.online/integrations",
  },

  // Marketing routes (relative paths for internal navigation)
  pages: {
    home: "/",
    platform: "/platform",
    pricing: "/pricing",
    integrations: "/integrations",
    solutions: "/solutions",
    security: "/security",
    docs: "/docs",
    contact: "/company/contact",
    about: "/company/about",
    privacy: "/security/privacy",
    compliance: "/security/compliance",
  },

  // Company information
  company: {
    name: "IntegrateWise",
    tagline: "The Productivity OS for Effortless Work",
    description:
      "IntegrateWise connects your tools through a shared structure (Spine), routes securely (Hub), and uses AI agents to turn work into action.",
    foundedYear: 2024,
    email: "hello@integratewise.co",
    supportEmail: "support@integratewise.co",
  },

  // Social links
  social: {
    twitter: "https://twitter.com/integratewise",
    linkedin: "https://linkedin.com/company/integratewise",
    github: "https://github.com/integratewise",
  },

  // SEO defaults
  seo: {
    defaultTitle: "IntegrateWise | The Productivity OS for Effortless Work",
    titleTemplate: "%s | IntegrateWise",
    defaultDescription:
      "Connect your tools once. IntegrateWise unifies Notion, Slack, CRMs, calendars, and AI apps through a shared structure. No migrations required.",
    keywords: [
      "productivity platform",
      "AI agents",
      "tool integration",
      "workflow automation",
      "no-code integration",
      "BYOM",
      "enterprise productivity",
    ],
    ogImage: "/images/og-image.png",
    twitterHandle: "@integratewise",
  },
} as const

// Type exports
export type AppConfig = typeof appConfig
export type AppRoutes = typeof appConfig.routes
export type AppPages = typeof appConfig.pages
