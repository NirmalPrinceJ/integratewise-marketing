/**
 * IntegrateWise Landing — marketing routes only.
 * App (workspace) lives at apps/web; link to it via APP_ENTRY_URL in lib/app-urls.
 */
import { createBrowserRouter } from "react-router";
import React from "react";
import { LandingLayout } from "@/components/LandingLayout";
import { NotFound } from "@/components/pages/NotFound";

const HomePage = React.lazy(() => import("@/components/pages/HomePage"));
const PlatformPage = React.lazy(() => import("@/components/pages/PlatformPage").then((m) => ({ default: m.PlatformPage })));
const WhoItsForPage = React.lazy(() => import("@/components/pages/WhoItsForPage").then((m) => ({ default: m.WhoItsForPage })));
const PricingPage = React.lazy(() => import("@/components/pages/PricingPage").then((m) => ({ default: m.PricingPage })));
const IntegrationsPage = React.lazy(() => import("@/components/pages/IntegrationsPage").then((m) => ({ default: m.IntegrationsPage })));
const SecurityPage = React.lazy(() => import("@/components/pages/SecurityPage").then((m) => ({ default: m.SecurityPage })));
const StoryPage = React.lazy(() => import("@/components/pages/StoryPage").then((m) => ({ default: m.StoryPage })));
const BookDemoPage = React.lazy(() => import("@/components/pages/BookDemoPage"));
const ContactPage = React.lazy(() => import("@/components/pages/ContactPage"));
const ProblemPage = React.lazy(() => import("@/components/marketing-site/landing/ProblemPage").then((m) => ({ default: m.ProblemPage })));
const TechnicalPage = React.lazy(() => import("@/components/marketing-site/landing/TechnicalPage").then((m) => ({ default: m.TechnicalPage })));
const GenericMarketingPage = React.lazy(() => import("@/components/marketing-site/landing/GenericMarketingPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "platform", Component: PlatformPage },
      { path: "who-its-for", Component: WhoItsForPage },
      { path: "pricing", Component: PricingPage },
      { path: "integrations", Component: IntegrationsPage },
      { path: "security", Component: SecurityPage },
      { path: "story", Component: StoryPage },
      { path: "problem", Component: ProblemPage },
      { path: "architecture", Component: TechnicalPage },
      { path: "technical", Component: TechnicalPage },
      { path: "book-demo", Component: BookDemoPage },
      { path: "contact", Component: ContactPage },
      { path: ":pageId", Component: GenericMarketingPage },
    ],
  },
  { path: "*", Component: NotFound },
]);
