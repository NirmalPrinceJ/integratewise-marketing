import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Activation from "./pages/Activation";
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

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/activate"} component={Activation} />
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
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
