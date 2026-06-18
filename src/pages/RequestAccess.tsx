import { useEffect } from 'react';
import { useSeo } from '../hooks/useSeo';

export default function RequestAccess() {
  useSeo("Book a Demo | IntegrateWise", "Book a demo with the IntegrateWise team. See how connected tools and a Digital Twin change the way your team works.");

  useEffect(() => {
    window.location.href = 'https://calendar.app.google/EcRkSqxwtchuF4Qf6';
  }, []);

  return (
    <div className="section-padding-y flex items-center justify-center min-h-[60vh]">
      <div className="text-center max-w-md">
        <h1 className="editorial-heading text-3xl text-iw-ink mb-4">REDIRECTING TO CALENDAR...</h1>
        <p className="font-iw-sans text-sm text-iw-slate mb-6">You are being redirected to our booking page. If nothing happens, <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="text-iw-forest underline">click here</a>.</p>
        <div className="w-8 h-8 border-2 border-iw-forest border-t-transparent rounded-full animate-spin mx-auto" />
      </div>
    </div>
  );
}
