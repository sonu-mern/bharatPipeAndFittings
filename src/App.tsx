import React, { useEffect } from "react";
import { constantValue } from "./utils/constantValue";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

// queryClient is now provided by entry points

// Import components directly for server-side rendering
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const App = () => {
  console.log("App rendering");
  useEffect(() => {
    // Only set document.title in browser environment
    if (typeof document !== 'undefined') {
      document.title = constantValue.companyName;
    }
  }, []);
  return (
    <>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
