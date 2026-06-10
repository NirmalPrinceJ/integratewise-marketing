import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Platform from './pages/Platform';
import Features from './pages/Features';
import Workbench from './pages/Workbench';
import Twin from './pages/Twin';
import Governance from './pages/Governance';
import Architecture from './pages/Architecture';
import Solutions from './pages/Solutions';
import Resources from './pages/Resources';
import Pricing from './pages/Pricing';
import About from './pages/About';
import CaseStudy from './pages/CaseStudy';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Integrations from './pages/Integrations';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import RequestAccess from './pages/RequestAccess';
import NotFound from './pages/NotFound';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Docs from './pages/Docs';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/features" element={<Features />} />
        <Route path="/workbench" element={<Workbench />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/twin" element={<Twin />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/request-access" element={<RequestAccess />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
