import { Outlet } from "react-router";
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const fallback = (
  <div
    className="min-h-screen flex items-center justify-center"
    style={{ background: "#ffffff", color: "#0a0a0a" }}
  >
    <div className="w-10 h-10 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

/** Layout wrapper for landing pages. */
export function LandingLayout() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-black selection:text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <React.Suspense fallback={fallback}>
          <Outlet />
        </React.Suspense>
      </main>
      <Footer />
    </div>
  );
}
