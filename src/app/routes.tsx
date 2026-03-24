import { createBrowserRouter, Navigate } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { HomePage } from "./components/pages/HomePage";
import { BrandAssetsPage } from "./components/pages/BrandAssetsPage";
import { DesignTokensPage } from "./components/pages/DesignTokensPage";
import { MarketingPage } from "./components/pages/MarketingPage";
import { SalesPage } from "./components/pages/SalesPage";
import { StationeryPage } from "./components/pages/StationeryPage";
import { GeneratorsPage } from "./components/pages/GeneratorsPage";
import { DocumentationPage } from "./components/pages/DocumentationPage";
import { ReadyMadeContentPage } from "./components/pages/ReadyMadeContentPage";
import { ProductLandingPages } from "./components/pages/ProductLandingPages";
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
    path: "/brand",
    Component: RootLayout,
    errorElement: (
      <div style={{ padding: 32, fontFamily: 'monospace', color: '#c00' }}>
        <h1>Route Error</h1>
        <p>Something went wrong loading this page. Check the console for details.</p>
      </div>
    ),
    children: [
      { index: true, Component: HomePage },
      { path: "brand-assets", Component: BrandAssetsPage },
      { path: "design-tokens", Component: DesignTokensPage },
      { path: "stationery", Component: StationeryPage },
      { path: "generators", Component: GeneratorsPage },
      { path: "marketing", Component: MarketingPage },
      { path: "product-landing-pages", Component: ProductLandingPages },
      { path: "sales", Component: SalesPage },
      { path: "ready-made-content", Component: ReadyMadeContentPage },
      { path: "documentation", Component: DocumentationPage },
      {
        path: "*",
        Component: () => (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h1 className="text-4xl font-bold" style={{ color: '#1D1E21' }}>404</h1>
              <p style={{ color: '#636A82' }} className="mt-2">Page not found</p>
            </div>
          </div>
        ),
      },
    ],
  },
]);
