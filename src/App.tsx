/**
 * IntegrateWise Landing — marketing site only.
 * Sign up / Sign in link to the main app (apps/web) via APP_ENTRY_URL.
 */
import React from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";

function RootFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-[#0a0a0a]">
      <div className="w-10 h-10 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <React.Suspense fallback={<RootFallback />}>
      <RouterProvider router={router} />
    </React.Suspense>
  );
}
