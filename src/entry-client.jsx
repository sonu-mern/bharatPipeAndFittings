import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { theme } from './theme';
import App from './App';

// Create a client-side query client
const queryClient = new QueryClient();

// Apply theme colors
theme.setThemeColors(document.documentElement);

// Hydrate the app
const container = document.getElementById('root');
hydrateRoot(
  container,
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);