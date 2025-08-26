import React from "react";
import { constantValue } from "./utils/constantValue";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

// queryClient is now provided by entry points

// Import components directly for server-side rendering
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const App = () => {
  console.log("App rendering");
  
  return (
    <>
      <Helmet>
        <title>{constantValue.companyName}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        
        {/* SEO Meta Tags */}
        <meta name="description" content="Leading manufacturer of stainless steel, alloy steel, carbon steel pipes, fittings, flanges, valves, fasteners, and round bars in India. High-quality industrial products for oil & gas, petrochemical, power, and automotive industries." />
        <meta name="keywords" content="stainless steel pipes, alloy steel fittings, carbon steel flanges, industrial valves, steel fasteners, round bars, pipe fittings manufacturer, India" />
        <meta name="author" content={constantValue.companyName} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={constantValue.companyName} />
        <meta property="og:description" content="Leading manufacturer of stainless steel, alloy steel, carbon steel pipes, fittings, flanges, valves, fasteners, and round bars in India." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={constantValue.companyUrl} />
        <meta property="og:image" content={`${constantValue.companyUrl}/logo.jpeg`} />
        <meta property="og:site_name" content={constantValue.companyName} />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={constantValue.companyName} />
        <meta name="twitter:description" content="Leading manufacturer of stainless steel, alloy steel, carbon steel pipes, fittings, flanges, valves, fasteners, and round bars in India." />
        <meta name="twitter:image" content={`${constantValue.companyUrl}/logo.jpeg`} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={constantValue.companyUrl} />
        
        {/* Favicon and App Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": constantValue.companyName,
            "url": constantValue.companyUrl,
            "logo": `${constantValue.companyUrl}/logo.jpeg`,
            "description": "Leading manufacturer of stainless steel, alloy steel, carbon steel pipes, fittings, flanges, valves, fasteners, and round bars in India.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "telephone": "+91-XXXXXXXXXX",
              "email": "info@bharatpipe.com"
            },
            "sameAs": [
              "https://www.facebook.com/bharatpipe",
              "https://www.linkedin.com/company/bharatpipe",
              "https://twitter.com/bharatpipe"
            ]
          })}
        </script>
        
        {/* Structured Data - WebSite */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": constantValue.companyName,
            "url": constantValue.companyUrl,
            "potentialAction": {
              "@type": "SearchAction",
              "target": `${constantValue.companyUrl}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>
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
