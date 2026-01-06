// Environment configuration with validation - SSOT v3.2
// All env vars documented in order per implementation spec

const requiredEnvs = {
  // Core
  NODE_ENV: process.env.NODE_ENV || "development",
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  VERCEL_ENV: process.env.VERCEL_ENV || "development",
} as const

const optionalEnvs = {
  // CMS - Sanity
  SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  SANITY_DATASET: process.env.SANITY_DATASET || "production",
  SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
  SANITY_PREVIEW_SECRET: process.env.SANITY_PREVIEW_SECRET,

  // CMS - Notion
  NOTION_TOKEN: process.env.NOTION_TOKEN || process.env.NOTION_API_KEY,
  NOTION_BLOG_DB: process.env.NOTION_BLOG_DATABASE_ID,
  NOTION_CHANGELOG_DB: process.env.NOTION_CHANGELOG_DATABASE_ID,
  NOTION_DOCS_DB: process.env.NOTION_DOCS_DATABASE_ID,
  NOTION_CASE_STUDIES_DB: process.env.NOTION_CASE_STUDIES_DATABASE_ID,

  // Cloudinary
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  CLOUDINARY_SECURE: process.env.CLOUDINARY_SECURE || "true",

  // Analytics
  GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID || process.env.NEXT_PUBLIC_GA_ID,

  // AI (for assistant demo)
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
  AI_GATEWAY_URL: process.env.AI_GATEWAY_URL,
} as const

export const env = {
  ...requiredEnvs,
  ...optionalEnvs,

  // Computed flags
  isProduction: process.env.NODE_ENV === "production",
  isDevelopment: process.env.NODE_ENV === "development",
  isPreview: process.env.VERCEL_ENV === "preview",

  // Feature flags
  hasCMS: !!(process.env.SANITY_PROJECT_ID || process.env.NOTION_TOKEN),
  hasCloudinary: !!(process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY),
  hasAnalytics: !!process.env.GA_MEASUREMENT_ID,
  hasAI: !!(process.env.OPENAI_API_KEY || process.env.ANTHROPIC_API_KEY),
} as const

export function validateEnv() {
  const missing: string[] = []

  // In production, warn about missing optional envs
  if (env.isProduction) {
    if (!env.hasCMS) missing.push("CMS (SANITY_PROJECT_ID or NOTION_TOKEN)")
    if (!env.hasCloudinary) missing.push("CLOUDINARY_CLOUD_NAME")
    if (!env.hasAnalytics) missing.push("GA_MEASUREMENT_ID")
  }

  if (missing.length > 0) {
    console.warn(`[env] Missing recommended environment variables: ${missing.join(", ")}`)
  }

  return missing.length === 0
}

export type Env = typeof env
