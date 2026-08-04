import React, { Suspense, lazy, useEffect } from "react";
import { constantValue } from "./utils/constantValue";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "./theme";
import Loader from "./components/loader/Loader";
import { HelmetProvider } from 'react-helmet-async';
theme.setThemeColors();

const queryClient = new QueryClient();

// ✅ Lazy loaded components
const Index = lazy(() => import("./pages/Index"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  console.log("App rendering");
  const expiryISO = constantValue.expiryDateISO;
  const isExpired = (() => {
    try {
      if (!expiryISO) return false;
      // Treat the ISO date as the start of that day: expire on that date (e.g., 2026-08-05 expires starting 2026-08-05 00:00)
      const expiryStart = new Date(expiryISO + "T00:00:00");
      // If current date/time is on or after the expiry start, consider expired
      return new Date() >= expiryStart;
    } catch (e) {
      return false;
    }
  })();

  useEffect(() => {
    document.title = isExpired ? "Subscription expired" : constantValue.companyName;
  }, [isExpired]);

  if (isExpired) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: 22, marginBottom: 8 }}>{constantValue.expiryMessage || "Subscription expired"}</h1>
          <p style={{ color: "#666" }}>Expiry Date: {constantValue.expiryDateISO}</p>
        </div>
      </div>
    );
  }
  return (
    <HelmetProvider>


    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Catch-all route for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
