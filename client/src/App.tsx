import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Platform from "./pages/Platform";
import Company from "./pages/Company";
import Blog from "./pages/Blog";
import Documentation from "./pages/Documentation";
import Solutions from "./pages/Solutions";
import AccountSuccess from "./pages/solutions/AccountSuccess";
import SalesContinuity from "./pages/solutions/SalesContinuity";
import FounderOps from "./pages/solutions/FounderOps";
import EngineeringProduct from "./pages/solutions/EngineeringProduct";
import AIGovernance from "./pages/solutions/AIGovernance";
import TwinPage from "./pages/twin/TwinPage";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/pricing"} component={Pricing} />
      <Route path={"/platform"} component={Platform} />
      <Route path={"/company"} component={Company} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/documentation"} component={Documentation} />
      <Route path={"/solutions"} component={Solutions} />
      <Route path={"/solutions/account-success"} component={AccountSuccess} />
      <Route path={"/solutions/sales-continuity"} component={SalesContinuity} />
      <Route path={"/solutions/founder-ops"} component={FounderOps} />
      <Route path={"/solutions/engineering-product"} component={EngineeringProduct} />
      <Route path={"/solutions/ai-governance"} component={AIGovernance} />
      <Route path={"/twin"} component={TwinPage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
