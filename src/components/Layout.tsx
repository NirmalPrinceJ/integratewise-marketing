import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import StickyCTA from './StickyCTA';
import { OrganizationSchema } from './Schema';
import Breadcrumb from './Breadcrumb';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-iw-paper">
      <OrganizationSchema />
      <Header />
      <Breadcrumb />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
