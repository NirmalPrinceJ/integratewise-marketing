import { createBrowserRouter, Navigate } from "react-router";
import { MarketingLandingPage } from "./components/pages/MarketingLandingPage";
import { ProductDetailPage } from "./components/pages/ProductDetailPage";
import { SpineDetailPage } from "./components/pages/SpineDetailPage";
import { HowItWorksPage } from "./components/pages/HowItWorksPage";
import { UseCasesPage } from "./components/pages/UseCasesPage";
import { IntegrationsPage } from "./components/pages/IntegrationsPage";
import { TrustPage } from "./components/pages/TrustPage";
import { AboutPage } from "./components/pages/AboutPage";
import { ContactPage } from "./components/pages/ContactPage";
import { AppLandingPage } from "./components/pages/AppLandingPage";

/**
 * IntegrateWise Marketing Site - Public Hook Site
 * Domain: integratewise.ai
 * Purpose: Create interest, educate category, drive to app
 */

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MarketingLandingPage,
  },
  {
    path: "/product",
    Component: ProductDetailPage,
  },
  {
    path: "/spine",
    Component: SpineDetailPage,
  },
  {
    path: "/how-it-works",
    Component: HowItWorksPage,
  },
  {
    path: "/use-cases",
    Component: UseCasesPage,
  },
  {
    path: "/integrations",
    Component: IntegrationsPage,
  },
  {
    path: "/trust",
    Component: TrustPage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
  {
    path: "/demo",
    Component: () => <Navigate to="/contact" replace />,
  },
  {
    path: "/app-landing",
    Component: AppLandingPage,
  },
  {
    path: "*",
    Component: () => <Navigate to="/" replace />,
  },
]);
