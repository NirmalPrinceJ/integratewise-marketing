/* ═══════════════════════════════════════════════════════════════════════
   COMPONENT INDEX — Barrel file for all components.
   
   Usage: import { ComponentName } from "./components"
   
   ACTIVE (used in pages):
   ─────────────────────────────────────────────────────────────────────
   - Header, Footer, Layout                → Shell / navigation
   - Logo                                  → Branding
   - AntiGravityBackground                 → Persistent floating confetti canvas
   - PersonaCards / PersonaCardsSection     → 6 persona cards with canvas scenes
   - PersonaCanvasScenes                   → HTML5 Canvas persona illustrations
   - AnimatedInfographic, VideoPlayer, DataCounter → Animated data visuals
   - LivingLoopAnimation                   → 8-stage interactive loop diagram
   - ToolLogos (ToolLogoBar, ToolLogoGrid) → Partner tool logo components
   - BlindSpotExplainer                    → Homepage "What You're Missing" section
   - WorkspaceScreen, HeroWorkspace, SpineVisualization → Workspace demo components
   - AnimateIn (FadeIn, StaggerChildren, etc.) → Motion animation wrappers

   AVAILABLE (valid code, not currently wired into pages):
   ─────────────────────────────────────────────────────────────────────
   - ChaosToClarity          → Before/after persona infographic
   - CognitiveLoopCanvas     → HTML5 Canvas cognitive loop diagram
   - CustomIllustrations     → 4 SVG illustrations (Network, Security, AI, Dashboard)
   - DesignSystemComponents  → Reusable design system primitives
                               (ComparisonCards, NumberedFeatureCard, FeatureGrid,
                                WorkspaceMockup, BulletList)
   ═══════════════════════════════════════════════════════════════════════ */

// ── Active components ──────────────────────────────────────────────────
export { Header } from "./Header";
export { Footer } from "./Footer";
export { Layout } from "./Layout";
export { Logo } from "./Logo";
export { AntiGravityBackground } from "./AntiGravityBackground";
export { PersonaCardsSection } from "./PersonaCards";
export { AnimatedInfographic, VideoPlayer, DataCounter } from "./AnimatedInfographic";
export { LivingLoopAnimation } from "./LivingLoopAnimation";
export {
  ToolLogoBar,
  ToolLogoGrid,
  QuickBooksLogo,
  SalesforceLogo,
  WhatsAppLogo,
  StripeLogo,
  FreshworksLogo,
  ShopifyLogo,
  GoogleSheetsLogo,
  MSTeamsLogo,
  SlackLogo,
  ExcelLogo,
  APILogo,
  HubSpotLogo,
  JiraLogo,
  GitHubLogo,
  ZendeskLogo,
} from "./ToolLogos";
export { BlindSpotExplainer } from "./BlindSpotExplainer";
export { HeroWorkspace, SpineVisualization } from "./workspace/WorkspaceScreen";
export { FadeIn, StaggerChildren, StaggerItem, SlideUp, ScaleIn, FadeInSpring } from "./motion/AnimateIn";

// ── Available (not wired into pages yet) ───────────────────────────────
export { ChaosToClarity } from "./ChaosToClarity";
export { CognitiveLoopCanvas } from "./CognitiveLoopCanvas";
export {
  NetworkIllustration,
  SecurityIllustration,
  AILearningIllustration,
  DashboardIllustration,
} from "./CustomIllustrations";
export {
  ComparisonCards,
  NumberedFeatureCard,
  FeatureGrid,
  WorkspaceMockup,
  BulletList,
} from "./DesignSystemComponents";

// ── Pages ──────────────────────────────────────────────────────────────
export { HomePage } from "./pages/HomePage";
export { PlatformPage } from "./pages/PlatformPage";
export { WhoItsForPage } from "./pages/WhoItsForPage";
export { PricingPage } from "./pages/PricingPage";
export { SecurityPage } from "./pages/SecurityPage";
export { StoryPage } from "./pages/StoryPage";
export { IntegrationsPage } from "./pages/IntegrationsPage";
export { NotFound } from "./pages/NotFound";