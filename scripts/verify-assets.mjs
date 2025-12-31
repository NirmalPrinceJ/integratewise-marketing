#!/usr/bin/env node

/**
 * Asset Verification Script
 * Ensures critical assets are present before deployment
 * Run: node scripts/verify-assets.mjs
 */

import { existsSync, readdirSync } from "fs"
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, "..")

// Required assets that must exist
const requiredAssets = [
  // Infographic components
  "components/infographics/Donut.tsx",
  "components/infographics/IntegrationGrid.tsx",
  "components/infographics/KPITile.tsx",
  "components/infographics/Pipeline.tsx",
  "components/infographics/SecurityBar.tsx",
  "components/infographics/TrustStrip.tsx",

  // Infographic SVGs
  "public/images/infographics/01-ecosystem-logos.svg",
  "public/images/infographics/02-os-core.svg",
  "public/images/infographics/03-spine.svg",
  "public/images/infographics/04-data-flow.svg",
  "public/images/infographics/05-webhooks.svg",
  "public/images/infographics/06-ai-agents.svg",
  "public/images/infographics/07-datasentinel.svg",
  "public/images/infographics/08-analytics-dashboard.svg",

  // Architecture diagrams
  "public/images/architecture-event-flow.svg",
  "public/images/architecture-hub-policy.svg",
  "public/images/architecture-spine-schema.svg",

  // Logo assets
  "public/images/integrateway-logo-markonly-transparent-indigo-v1.svg",
  "public/images/integrateway-favicon-16x16-v1.png",
  "public/images/integrateway-appicon-1024-v1.png",

  // Config
  "config/app.ts",

  // Data
  "data/infographics.json",

  // Type definitions
  "lib/infographics/types.ts",

  // Key pages
  "app/page.tsx",
  "app/layout.tsx",
  "app/demo/page.tsx",
  "app/platform/page.tsx",
  "app/integrations/page.tsx",
  "app/pricing/page.tsx",

  // Components
  "components/navbar.tsx",
  "components/footer.tsx",
]

// Optional assets (warn if missing but don't fail)
const optionalAssets = [
  "public/images/og-image.png",
  "public/manifest.json",
  "components/forms/ContactForm.tsx",
]

let hasErrors = false
let hasWarnings = false

console.log("🔍 Verifying required assets...\n")

// Check required assets
for (const asset of requiredAssets) {
  const fullPath = resolve(rootDir, asset)
  if (existsSync(fullPath)) {
    console.log(`✅ ${asset}`)
  } else {
    console.error(`❌ MISSING: ${asset}`)
    hasErrors = true
  }
}

console.log("\n🔍 Checking optional assets...\n")

// Check optional assets
for (const asset of optionalAssets) {
  const fullPath = resolve(rootDir, asset)
  if (existsSync(fullPath)) {
    console.log(`✅ ${asset}`)
  } else {
    console.warn(`⚠️  OPTIONAL MISSING: ${asset}`)
    hasWarnings = true
  }
}

// Check infographics directory has expected count
const infographicsDir = resolve(rootDir, "public/images/infographics")
if (existsSync(infographicsDir)) {
  const infographicFiles = readdirSync(infographicsDir).filter(f => f.endsWith(".svg"))
  if (infographicFiles.length < 8) {
    console.warn(`\n⚠️  Expected 8 infographic SVGs, found ${infographicFiles.length}`)
    hasWarnings = true
  } else {
    console.log(`\n✅ Infographics directory: ${infographicFiles.length} SVG files`)
  }
}

// Summary
console.log("\n" + "=".repeat(50))
if (hasErrors) {
  console.error("❌ VERIFICATION FAILED: Missing required assets")
  process.exit(1)
} else if (hasWarnings) {
  console.warn("⚠️  Verification passed with warnings")
  process.exit(0)
} else {
  console.log("✅ All assets verified successfully!")
  process.exit(0)
}
